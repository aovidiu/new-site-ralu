import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-2-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './course-2-component.html',
  styleUrl: './course-2-component.css',
})
export class Course2Component {
  readonly backButtonLabel = 'Back';

  readonly title = 'Importanta sanatatii mintale in relatiile de cuplu';

  readonly imageAlt = 'Ilustratie curs sanatate mintala in cuplu';

  readonly paragraphs = [
    'Acest curs este dedicat modului in care starea emotionala personala influenteaza dinamica unui cuplu. Vei observa cum stresul prelungit, anxietatea sau oboseala psihica afecteaza comunicarea, apropierea si capacitatea de a ramane conectat in momente dificile.',
    'Punem accent pe comunicare clara si empatica: cum sa exprimi nevoi reale fara acuzatii, cum sa asculti activ si cum sa creezi un climat de siguranta in care ambii parteneri sa se simta vazuti si intelesi. Relatiile se stabilizeaza atunci cand fiecare persoana invata sa comunice din autenticitate, nu din defensiva.',
    'Partea practica include repere pentru gestionarea conflictelor, reglarea emotionala in discutii tensionate si stabilirea unor limite sanatoase. Vei pleca din curs cu un set de idei concrete pe care le poti aplica in viata de zi cu zi pentru mai multa apropiere si echilibru relational.'
  ];
}
