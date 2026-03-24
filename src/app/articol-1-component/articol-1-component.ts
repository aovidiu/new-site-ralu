import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-articol-1-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './articol-1-component.html',
  styleUrl: './articol-1-component.css',
})
export class Articol1Component {
  titlu = 'Cum să gestionezi anxietatea în viața de zi cu zi';
  text = `Anxietatea poate fi copleșitoare, dar există strategii eficiente pentru a o gestiona. În acest articol, vom explora tehnici de respirație, mindfulness și alte metode care te pot ajuta să-ți controlezi anxietatea și să-ți îmbunătățești viața.\n\nTehnicile de respirație diafragmală sunt foarte eficiente. Respiră adânc prin nas timp de 4 secunde, ține răsuflarea 4 secunde, apoi expiră lent timp de 4 secunde. Repetă acest ciclu de 5-10 ori.\n\nMindfulness-ul și meditația pot reduce simptomele de anxietate. Dedică 10-15 minute zilnic meditației pentru a-ți calma mintea.\n\nMovementul și exercițiul fizic sunt, de asemenea, benefice. O plimbare de 30 de minute zilnic poate reduce anxiety-ul și îmbunătăți starea de spirit.\n\nNu ezita să cauți ajutor profesional dacă anxietatea te afectează în mod semnificativ.`;
}
