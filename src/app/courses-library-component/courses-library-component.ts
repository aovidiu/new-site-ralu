import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoursesTexts } from '../texts/courses-texts';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-courses-library-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule],
  templateUrl: './courses-library-component.html',
  styleUrl: './courses-library-component.scss',
})
export class LibraryComponent {
  private meta = inject(Meta);
  private title = inject(Title);

  readonly backButtonLabel = 'Back';

  readonly pageTitle = 'Cursuri pentru dezvoltare personală';

  readonly introduction =
    'Aici găsești o selecție de cursuri și materiale de reflecție construite pentru a te ajuta să înțelegi mai bine emoțiile, relațiile și resursele tale interioare.';

  readonly readMoreLabel = 'Citește mai mult';

  readonly courses = CoursesTexts;

  ngOnInit() {
    this.title.setTitle('Cursuri pentru dezvoltare personală București - Cabinet Psihologie');
    this.meta.updateTag({ name: 'description', content: 'Cursuri online de dezvoltare personală și psihologie din București. Învață să gestionezi stresul, să îmbunătățești relațiile și să îți dezvolți abilitățile personale cu ajutorul specialiștilor noștri din București.' });
    this.meta.updateTag({ name: 'keywords', content: 'cursuri dezvoltare personală București, cursuri online psihologie București, dezvoltare personală București, management stres București, relații București, comunicare București, cabinet psihologie București' });
  }
}

