import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-articol-2',
  imports: [CommonModule, RouterModule],
  templateUrl: './articol-2.html',
  styleUrl: './articol-2.css',
})
export class Articol2 {
  titlu = 'Importanța sănătății mintale în relațiile de cuplu';
  text = `Relațiile de cuplu pot fi afectate de problemele de sănătate mintală. În acest articol, vom discuta despre cum să recunoști semnele de stres și anxietate în relația ta și cum să oferi sprijin partenerului tău pentru a menține o relație sănătoasă și echilibrată.\n\nComunicarea deschisă este cheia unei relații sănătoase. Asculți activ, empatic și fără judecată.\n\nRecunoaște semnele de stres în partenerul tău: iritabilitate, retragere, insomnie, schimbări de apetit.\n\nOferi sprijin emoțional prin a fi prezent și prin a asculta. Uneori, doar ascultarea cu atenție poate face o diferență mare.\n\nConsiderează terapia de cuplu dacă relația traversează o perioadă dificilă.\n\nPrioritizează calitatea timpului petrecut împreună și cultiva intimitate emoțională.`;
}
