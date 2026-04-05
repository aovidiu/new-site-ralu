import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-psihoterapy',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './psihoterapy-component.html',
  styleUrl: './psihoterapy-component.scss'
})
export class PsihoterapyComponent {
  contents1 = `
    <p>Procesul terapeutic este un drum al descoperirii și al transformării. Nu este întotdeauna simplu, dar este un spațiu în care poți fi tu însuți, fără măști și fără teamă de judecată.</p>
    <p>În această călătorie vei fi însoțit cu respect și empatie, astfel încât să poți înțelege, accepta și transforma ceea ce trăiești.</p>
    <h2>Cu ce te putem ajuta?</h2>
    <ul>
      <li>Dacă simți că ai nevoie:
        <ul>
          <li>să te cunoști mai bine</li>
          <li>să înveți să pui limite în relațiile tale, să spui nu</li>
          <li>să comunici mai bine cu cei din jur</li>
          <li>să gestionezi mai bine relațiile cu persoanele apropiate și relațiile profesionale</li>
          <li>să pui mai multă claritate în obiectivele tale</li>
        </ul>
      </li>
      <li>Dacă îți dorești să îți înțelegi mai bine reacțiile și să înveți să răspunzi mai bine provocărilor emoționale</li>
      <li>Dacă te confrunți cu stări de anxietate, depresie, teamă de eșec sau alte dificultăți emoționale</li>
    </ul>
    <h2>. . .te așteptăm să ne contactezi</h2>`;
}