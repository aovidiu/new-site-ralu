import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Descriptions } from './home-constants-component';
import { COURSES } from '../library-component/library-constants-component';

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

  Titlul_Article1 = "Cum să gestionezi anxietatea în viața de zi cu zi";
  Summary_Article1 = "Anxietatea poate fi copleșitoare, dar există strategii eficiente pentru a o gestiona. În acest articol, vom explora tehnici de respirație, mindfulness și alte metode care te pot ajuta să-ți controlezi anxietatea și să-ți îmbunătățești viata";

  Titlul_Article2 = "Importanța sănătății mintale în relațiile de cuplu";
  Summary_Article2 = "Relațiile de cuplu pot fi afectate de problemele de sănătate mintală. În acest articol, vom discuta despre cum să recunoști semnele de stres și anxietate în relația ta și cum să oferi sprijin partenerului tău pentru a menține o relație sănătoasă și echilibrată.";

  Titlul_Article3 = "Cum să-ți îmbunătățești stima de sine";
  Summary_Article3 = "Stima de sine joacă un rol crucial în bunăstarea noastră mentală. În acest articol, vom explora modalități practice de a-ți îmbunătăți stima de sine, inclusiv exerciții de auto-reflecție, afirmări pozitive și alte tehnici care te pot ajuta să te simți mai încrezător și mai valoros.";

  Citeste_Mai_Mult = "Citește mai mult";
}