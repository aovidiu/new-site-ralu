import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
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
  private meta = inject(Meta);
  private title = inject(Title);

  Titlul_Pagina = "Cine suntem noi?";

  RalucaParagrafe = Object.values(DescriptionsTexts.Raluca);
  AnaParagrafe = Object.values(DescriptionsTexts.Ana);

  Articles = ArticlesTexts;

  Citeste_Mai_Mult = "Citește mai mult";

  ngOnInit() {
    this.title.setTitle('Cabinet psihologie București - Servicii de psihoterapie și dezvoltare personală');
    this.meta.updateTag({ name: 'description', content: 'Cabinet de psihologie din București specializat în terapie cognitiv-comportamentală, cursuri de dezvoltare personală și consiliere psihologică. Ajutăm persoanele să depășească dificultățile emoționale și să își îmbunătățească calitatea vieții.' });
    this.meta.updateTag({ name: 'keywords', content: 'psihoterapie București, terapie cognitiv comportamentală București, dezvoltare personală București, consiliere psihologică București, cabinet psihologie București, cursuri dezvoltare personală București, anxietate București, depresie București, stres București' });
  }
}
