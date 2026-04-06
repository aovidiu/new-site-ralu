import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ARTICLES, Descriptions } from './home-constants-component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.scss']
})

export class HomeComponent { 
  Titlul_Pagina = "Cine suntem noi?";

  RalucaParagrafe = Object.values(Descriptions.Raluca);
  AnaParagrafe = Object.values(Descriptions.Ana);

  Articles = ARTICLES;

  Citeste_Mai_Mult = "Citește mai mult";
}