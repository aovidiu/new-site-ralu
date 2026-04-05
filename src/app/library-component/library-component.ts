import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { COURSES } from './library-constants-component';

@Component({
  selector: 'app-library-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule],
  templateUrl: './library-component.html',
  styleUrl: './library-component.scss',
})
export class LibraryComponent {
  readonly backButtonLabel = 'Back';

  readonly pageTitle = 'Cursuri pentru echilibru interior';

  readonly introduction =
    'Aici găsești o selecție de cursuri și materiale de reflecție construite pentru a te ajuta să înțelegi mai bine emoțiile, relațiile și resursele tale interioare.';

  readonly readMoreLabel = 'Citește mai mult';

  readonly courses = COURSES;
}
