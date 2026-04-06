import { Component, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ARTICLES } from '../home-component/home-constants-component';

@Component({
  selector: 'app-articol-2-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './articol-2-component.html',
  styleUrl: './articol-2-component.scss',
})
export class Articol2Component {
  constructor(private sanitizer: DomSanitizer) {}
  articol2 = ARTICLES[1];

    get safeArticol2Contents(): string {
      return this.sanitizer.sanitize(SecurityContext.HTML, this.articol2.contents) ?? '';
    }
 
}
