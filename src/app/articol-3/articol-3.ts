import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-articol-3',
  imports: [CommonModule, RouterModule],
  templateUrl: './articol-3.html',
  styleUrl: './articol-3.css',
})
export class Articol3 {
  titlu = 'Cum să-ți îmbunătățești stima de sine';
  text = `Stima de sine joacă un rol crucial în bunăstarea noastră mentală. În acest articol, vom explora modalități practice de a-ți îmbunătăți stima de sine.\n\nIncepe cu un jurnal de gratitudine. Notează zilnic trei lucruri pentru care ești recunoscător.\n\nPractică afirmații pozitive. Spune-ți zilnic lucruri cum ar fi: 'Sunt capabil și meriting'.\n\nIdentifică punctele tale forte și slăbiciuni. Acceptă că toată lumea are ambele.\n\nInvestește în dezvoltare personală. Citire, cursuri online, hobby-uri.\n\nOcupă-te de mediul tău. Șederi în jurul oamenilor pozitivi.\n\nSetează limite sănătoase. Spune 'nu' fără să te simți vinovat.\n\nPractică auto-compasiune și vorbește cu tine în mod binevoitor.\n\nCelebrează victoriile mici și recunoaște progresul zilnic.`;
}
