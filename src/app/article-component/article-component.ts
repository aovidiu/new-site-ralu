import { Component, DOCUMENT, SecurityContext, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ArticlesTexts } from '../texts/articles-texts';
import { BackButtonComponent } from '../back-button-component/back-button-component';
import { Meta, Title } from '@angular/platform-browser';
import { setCanonicalLinkForIndex } from '../common/helpers';

@Component({
  selector: 'app-article-component',
  imports: [RouterModule, BackButtonComponent],
  templateUrl: './article-component.html',
  styleUrl: './article-component.scss',
})
export class ArticleComponent {
  private sanitizer = inject(DomSanitizer);
  private route = inject(ActivatedRoute);
  private meta = inject(Meta);
  private title = inject(Title);
  private document = inject(DOCUMENT);

  allArticles = ArticlesTexts;
  selectedArticle = null as (typeof ArticlesTexts)[number] | null;
  articleContents = '';

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedArticle = null;
      this.articleContents = '';

      const id = params.get('id') ?? '';
      const index = Number(id) - 1;
      if (id && Number.isInteger(index) && index >= 0) {
        const article = this.allArticles[index];
        if (article) {
          this.selectedArticle = article;
          this.articleContents = this.sanitizer.sanitize(SecurityContext.HTML, article.contents) ?? '';

          // Set SEO meta tags
          this.title.setTitle(`Articol informațional - Cabinet Psihologie București`);
          this.meta.updateTag({ name: 'description', content: `Articol despre sănătate mentală București. Informații utile despre psihologie și dezvoltare personală de la specialiști din București.` });
          this.meta.updateTag({ name: 'keywords', content: `articol psihologie București, ${article.title.toLowerCase()} București, sănătate mentală București, dezvoltare personală București, consiliere București` });          
          setCanonicalLinkForIndex(this.document, `article/${id}`);
        }
      }
    });
  }
}
