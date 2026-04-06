import { Component, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ARTICLES } from '../home-component/home-constants-component';

@Component({
  selector: 'app-articol-1-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './articol-1-component.html',
  styleUrl: './articol-1-component.scss',
})
export class Articol1Component {
  constructor(private sanitizer: DomSanitizer) {}

  articol1 = ARTICLES[0];

  get safeArticol1Contents(): string {
    return this.sanitizer.sanitize(SecurityContext.HTML, this.articol1.contents) ?? '';
  }
}
