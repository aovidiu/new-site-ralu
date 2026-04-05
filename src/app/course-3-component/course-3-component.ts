import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-3-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './course-3-component.html',
  styleUrl: './course-3-component.scss',
})
export class Course3Component {
  readonly backButtonLabel = 'Back';

  readonly title = 'Cum sa-ti imbunatatesti stima de sine';

  readonly imageAlt = 'Ilustratie curs stima de sine';

  readonly paragraphs = [
    'Cursul te ghideaza sa observi mai atent felul in care vorbesti cu tine si standardele pe care ti le impui zilnic. De multe ori, stima de sine este afectata de un dialog interior critic, de comparatii constante si de ignorarea progreselor mici care conteaza.',
    'Vei invata sa identifici punctele forte reale, sa formulezi obiective accesibile si sa inlocuiesti treptat auto-critica dura cu o atitudine mai echilibrata. Scopul nu este o incredere artificiala, ci construirea unei baze interioare stabile si autentice.',
    'In partea aplicata, cursul propune exercitii de reflecție, tehnici de auto-validare si practici simple pentru consolidarea limitelor personale. Aceste instrumente te ajuta sa ramai conectat la propria valoare, chiar si in perioade solicitante.'
  ];
}
