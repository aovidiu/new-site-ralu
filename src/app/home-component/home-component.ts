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

  Citeste_Mai_Mult = "Citește mai mult";

  Titlul_Pagina = "Cine suntem noi?";

  Descriere_Raluca = "Sunt Raluca Albu, psiholog clinician și psihoterapeut, cu o experiență de peste 10 ani în domeniul sănătății mintale. Am absolvit Facultatea de Psihologie și Științele Educației și am continuat să mă specializez în diverse forme de terapie, inclusiv terapia cognitiv-comportamentală și terapia de cuplu. Sunt pasionată de a ajuta oamenii să-și depășească provocările și să-și găsească echilibrul interior.";

  Descriere_Ana = "Sunt Ana Maria Badescu, psiholog clinician și psihoterapeut, cu o experiență de peste 8 ani în domeniul sănătății mintale. Am absolvit Facultatea de Psihologie și Științele Educației și am continuat să mă specializez în diverse forme de terapie, inclusiv terapia cognitiv-comportamentală și terapia de familie. Sunt dedicată să ofer sprijin și îndrumare pentru a ajuta oamenii să-și atingă potențialul maxim și să-și găsească echilibrul interior.";

  Titlul_Blog1 = "Cum să gestionezi anxietatea în viața de zi cu zi";
  Descriere_Blog1 = "Anxietatea poate fi copleșitoare, dar există strategii eficiente pentru a o gestiona. În acest articol, vom explora tehnici de respirație, mindfulness și alte metode care te pot ajuta să-ți controlezi anxietatea și să-ți îmbunătățești viata";

  Titlul_Blog2 = "Importanța sănătății mintale în relațiile de cuplu";
  Descriere_Blog2 = "Relațiile de cuplu pot fi afectate de problemele de sănătate mintală. În acest articol, vom discuta despre cum să recunoști semnele de stres și anxietate în relația ta și cum să oferi sprijin partenerului tău pentru a menține o relație sănătoasă și echilibrată.";

  Titlul_Blog3 = "Cum să-ți îmbunătățești stima de sine";
  Descriere_Blog3 = "Stima de sine joacă un rol crucial în bunăstarea noastră mentală. În acest articol, vom explora modalități practice de a-ți îmbunătăți stima de sine, inclusiv exerciții de auto-reflecție, afirmări pozitive și alte tehnici care te pot ajuta să te simți mai încrezător și mai valoros.";

}