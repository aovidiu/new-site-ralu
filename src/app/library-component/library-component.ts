import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

type Course = {
  title: string;
  summary: string;
  route: string;
};

@Component({
  selector: 'app-library-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule],
  templateUrl: './library-component.html',
  styleUrl: './library-component.css',
})
export class LibraryComponent {
  readonly backButtonLabel = 'Back';

  readonly pageTitle = 'Cursuri pentru echilibru interior';

  readonly introduction =
    'Aici găsești o selecție de cursuri și materiale de reflecție construite pentru a te ajuta să înțelegi mai bine emoțiile, relațiile și resursele tale interioare.';

  readonly coursesTitle = 'Lista cursurilor';

  readonly readMoreLabel = 'Citește mai mult';

  readonly courses: Course[] = [
    {
      title: 'Cum să gestionezi anxietatea în viața de zi cu zi',
      summary:
        'Un curs introductiv despre tehnici simple de respirație, mindfulness și organizare interioară pentru momentele în care anxietatea devine apăsătoare.',
      route: '/course-1',
    },
    {
      title: 'Importanța sănătății mintale în relațiile de cuplu',
      summary:
        'Un material dedicat relațiilor apropiate, cu idei practice despre comunicare, stres emoțional și moduri prin care poți susține echilibrul în cuplu.',
      route: '/course-2',
    },
    {
      title: 'Cum să-ți îmbunătățești stima de sine',
      summary:
        'Un parcurs orientat spre autocunoaștere, încredere și consolidarea unei imagini de sine mai stabile prin exerciții și observații aplicate.',
      route: '/course-3',
    },
  ];
}
