import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header-component/header-component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.css']
})
export class HomeComponent { }