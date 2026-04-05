import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ARTICLES } from '../home-component/home-constants-component';

@Component({
  selector: 'app-articol-1-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './articol-1-component.html',
  styleUrl: './articol-1-component.scss',
})
export class Articol1Component {
  articol1 = ARTICLES[0];
}
