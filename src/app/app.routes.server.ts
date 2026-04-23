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