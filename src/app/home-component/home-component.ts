import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DescriptionsTexts } from '../texts/descriptions-texts';
import { ArticlesTexts } from '../texts/articles-texts';


@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.scss']
})

export class HomeComponent { 
  Titlul_Pagina = "Cine suntem noi?";

  RalucaParagrafe = Object.values(DescriptionsTexts.Raluca);
  AnaParagrafe = Object.values(DescriptionsTexts.Ana);

  Articles = ArticlesTexts;

  Citeste_Mai_Mult = "Citește mai mult";
}