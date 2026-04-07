import { Component, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ArticlesTexts } from '../texts/articles-texts';

@Component({
  selector: 'app-article-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './article-component.html',
  styleUrl: './article-component.scss',
})
export class ArticleComponent {
  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute) {}

  allArticles = ArticlesTexts;
  safeArticleContents = '';
  titleArticle = '';

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.safeArticleContents = '';
      this.titleArticle = '';

      const id = params.get('id') ?? '';
      const index = Number(id) - 1;
      if (id && Number.isInteger(index) && index >= 0) {
        const article = this.allArticles[index];
        if (article) {
          this.safeArticleContents = this.sanitizer.sanitize(SecurityContext.HTML, article.contents) ?? '';
          this.titleArticle = article.title;
        }
      }
    });
  }
}
