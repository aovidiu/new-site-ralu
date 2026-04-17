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
        }
      }
    });
  }
}
