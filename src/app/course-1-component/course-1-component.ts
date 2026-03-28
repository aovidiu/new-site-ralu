import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-1-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './course-1-component.html',
  styleUrl: './course-1-component.css',
})
export class Course1Component {
  readonly backButtonLabel = 'Back';

  readonly title = 'Cum sa gestionezi anxietatea in viata de zi cu zi';

  readonly imageAlt = 'Ilustratie curs gestionarea anxietatii';

  readonly paragraphs = [
    'Acest curs te ajuta sa intelegi mai bine cum apare anxietatea in viata de zi cu zi si cum se manifesta prin tensiune fizica, ganduri repetitive si dificultati de concentrare. Primul pas este observarea clara a acestor semnale, fara judecata, pentru a putea raspunde mai calm in loc sa reactionezi impulsiv.',
    'Vei exersa tehnici simple de respiratie si ancorare care pot fi aplicate in cateva minute, inclusiv in zilele aglomerate. Scopul nu este sa elimini complet disconfortul dintr-o data, ci sa iti construiesti treptat sentimentul de control si siguranta interioara.',
    'Cursul include exemple concrete pentru situatii frecvente: agitatie inainte de o discutie importanta, neliniste la finalul zilei sau tendinta de a anticipa scenarii negative. Prin exercitii scurte si repetate, vei invata sa reduci intensitatea starilor anxioase si sa iti recapeti claritatea.'
  ];
}
