import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoursesTexts } from '../texts/courses-texts';

@Component({
  selector: 'app-courses-library-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule],
  templateUrl: './courses-library-component.html',
  styleUrl: './courses-library-component.scss',
})
export class LibraryComponent {
  readonly backButtonLabel = 'Back';

  readonly pageTitle = 'Cursuri pentru dezvoltare personală';

  readonly introduction =
    'Aici găsești o selecție de cursuri și materiale de reflecție construite pentru a te ajuta să înțelegi mai bine emoțiile, relațiile și resursele tale interioare.';

  readonly readMoreLabel = 'Citește mai mult';

  readonly courses = CoursesTexts;
}
