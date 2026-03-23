import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header-component/header-component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.scss']
})

export class HomeComponent { 

  Titlul_Pagina = "Acesta este cabinetul nostru individual de psihologie";
  Descriere_Raluca = "Sunt Raluca Albu, psiholog clinician și psihoterapeut, cu o experiență de peste 10 ani în domeniul sănătății mintale. Am absolvit Facultatea de Psihologie și Științele Educației și am continuat să mă specializez în diverse forme de terapie, inclusiv terapia cognitiv-comportamentală și terapia de cuplu. Sunt pasionată de a ajuta oamenii să-și depășească provocările și să-și găsească echilibrul interior.";
  Descriere_Ana = "Sunt Ana Maria Badescu, psiholog clinician și psihoterapeut, cu o experiență de peste 8 ani în domeniul sănătății mintale. Am absolvit Facultatea de Psihologie și Științele Educației și am continuat să mă specializez în diverse forme de terapie, inclusiv terapia cognitiv-comportamentală și terapia de familie. Sunt dedicată să ofer sprijin și îndrumare pentru a ajuta oamenii să-și atingă potențialul maxim și să-și găsească echilibrul interior.";

}