# Rezumat Tehnic — psihoterapie-training.ro

## Stack & Configurație

- **Framework:** Angular 17+ cu SSR + Prerendering static
- **Hosting:** GitHub Pages (branch `gh-pages`)
- **DNS:** Cloudflare (`bailey.ns.cloudflare.com`, `harvey.ns.cloudflare.com`)
- **Domeniu:** ROTLD (psihoterapie-training.ro)
- **Contact Form:** Cloudflare Worker → Formspree

---

## Comanda de Deploy

```powershell
ng build --configuration production --base-href "/" ; del dist\psihologie-ralu\browser\index.csr.html ; npx ngh --dir=dist/psihologie-ralu/browser
```

**Important:**
- NU folosi `git push origin --delete gh-pages` — resetează branch-ul în GitHub Settings la `master`
- Dacă ștergi accidental `gh-pages`, mergi în **GitHub → Settings → Pages** și schimbă înapoi la `gh-pages`
- `index.csr.html` se șterge pentru că Bing îl primește gol (fără conținut prerenderit)

---

## Configurație Angular — angular.json

```json
"server": "src/main.server.ts",
"outputMode": "static",
"prerender": {
  "routesFile": "routes.txt"
}
```

## routes.txt

```
/
/psihoterapy
/send-message
/library
/article/1
/article/2
/article/3
/course/1
/course/2
/course/3
/course/4
```

## app.routes.server.ts

```typescript
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'article/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [
      { id: '1' },
      { id: '2' },
      { id: '3' }
    ]
  },
  {
    path: 'course/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [
      { id: '1' },
      { id: '2' },
      { id: '3' },
      { id: '4' }
    ]
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
```

## app.config.ts

```typescript
import { provideHttpClient, withFetch } from '@angular/common/http';

providers: [
  // ... rest of providers
  provideHttpClient(withFetch())
]
```

---

## Canonical Links

**Problemă:** `index.html` hardcodat pointează spre pagina principală pentru toate paginile.

**Soluție:** Funcție utilitară în `src/app/common/seo-utils.ts`:

```typescript
export const setCanonicalLinkForIndex = (document: Document, urlPart: string) => {
  let link = document.querySelector('link[rel="canonical"]');
  if (link) {
    link.setAttribute('href', `https://psihoterapie-training.ro/${urlPart}/`);
  } else {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', `https://psihoterapie-training.ro/${urlPart}/`);
    document.head.appendChild(link);
  }
};
```

**Utilizare în componente:**

```typescript
import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';
import { setCanonicalLinkForIndex } from '../common/seo-utils';

export class PsihoterapyComponent {
  private document = inject(DOCUMENT);

  ngOnInit() {
    setCanonicalLinkForIndex(this.document, 'psihoterapy');
  }
}
```

**Canonical pentru fiecare componentă:**
- `HomeComponent` → hardcodat în `index.html` (nu necesită cod)
- `PsihoterapyComponent` → `setCanonicalLinkForIndex(this.document, 'psihoterapy')`
- `LibraryComponent` → `setCanonicalLinkForIndex(this.document, 'library')`
- `ContactEmailComponent` → `setCanonicalLinkForIndex(this.document, 'send-message')`
- `ArticleComponent` → `setCanonicalLinkForIndex(this.document, \`article/${this.id}\`)`
- `CourseComponent` → `setCanonicalLinkForIndex(this.document, \`course/${this.id}\`)`

---

## Cloudflare DNS Records

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| A | @ | 185.199.108.153 | DNS only |
| A | @ | 185.199.109.153 | DNS only |
| A | @ | 185.199.110.153 | DNS only |
| A | @ | 185.199.111.153 | DNS only |
| CNAME | www | aovidiu.github.io | DNS only |

**Setări importante Cloudflare:**
- **Always Use HTTPS:** ON (SSL/TLS → Edge Certificates)
- **DNSSEC:** dezactivat în ROTLD

---

## Cloudflare Worker — Contact Form

**URL Worker:** `https://contact-worker.message-contact.workers.dev/contact`

**Variables and Secrets:**
- `ALLOWED_ORIGIN` = `https://psihoterapie-training.ro`
- `FORMSPREE_URL` = `https://formspree.io/f/xreagzzg` (Secret)

**CORS în Worker:**
```javascript
const isAllowed = origin === allowedOrigin 
  || origin === "http://localhost:4200" 
  || origin === "https://aovidiu.github.io";
```

**Header Referer necesar pentru Formspree:**
```javascript
const upstream = await fetch(env.FORMSPREE_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Referer": "https://psihoterapie-training.ro",
    "Origin": "https://psihoterapie-training.ro"
  },
  body: JSON.stringify({ name, email, message })
});
```

**Formspree:** Spam Protection (Formshield) **dezactivat** — altfel requesturile de pe server sunt filtrate ca spam.

---

## Rulare Locală Contact Form

1. Terminal 1: `ng serve`
2. Terminal 2: `cd contact-worker && npx wrangler dev` (ascultă pe `http://127.0.0.1:8787`)
3. În `contact-email-component.ts`: `const url = 'http://127.0.0.1:8787/contact'`

---

## Fișiere în folderul `public/`

- `404.html` — copie după `index.html` (pentru GitHub Pages routing)
- `favicon.ico`
- `favicon-32x32.png`
- `favicon-16x16.png`
- `CNAME` — conține `psihoterapie-training.ro`

---

## sitemap.xml

Toate URL-urile cu **slash la final** (GitHub Pages face redirect 301 fără slash):

```xml
<loc>https://psihoterapie-training.ro/</loc>
<loc>https://psihoterapie-training.ro/psihoterapy/</loc>
<loc>https://psihoterapie-training.ro/library/</loc>
<loc>https://psihoterapie-training.ro/send-message/</loc>
<loc>https://psihoterapie-training.ro/article/1/</loc>
<!-- ... etc -->
```

---

## robots.txt

```
User-agent: *
Allow: /
Sitemap: https://psihoterapie-training.ro/sitemap.xml
```

---

## Google Search Console

- **Verificare:** prin DNS TXT record în Cloudflare
- **Sitemap trimis:** `https://psihoterapie-training.ro/sitemap.xml`
- **11 pagini descoperite**

---

## Probleme Rezolvate & Cauze

| Problemă | Cauză | Soluție |
|----------|-------|---------|
| Sub-paginile dau 404 | Branch GitHub Pages setat pe `master` în loc de `gh-pages` | Settings → Pages → gh-pages |
| Eroare redirecționare Google | URL-uri în sitemap fără slash la final | Adăugat slash la toate URL-urile |
| Canonical greșit pe toate paginile | Hardcodat în index.html | `setCanonicalLinkForIndex()` cu DOCUMENT inject |
| Formularul de contact nu trimite | Formshield Formspree filtrează requesturile de server | Dezactivat Formshield + adăugat Referer header |
| CORS eroare după schimbare domeniu | Worker accepta doar `aovidiu.github.io` | Adăugat `psihoterapie-training.ro` în CORS |
| Bing vede `<app-root>` gol | `index.csr.html` servit în loc de `index.html` | Șters `index.csr.html` din deploy |
| Versiunea HTTP indexată de Google | Always Use HTTPS dezactivat în Cloudflare | Activat Always Use HTTPS |
| `git push --delete gh-pages` resetează branch | GitHub Pages revine la master când branch-ul e șters | Eliminat din comanda de deploy |
