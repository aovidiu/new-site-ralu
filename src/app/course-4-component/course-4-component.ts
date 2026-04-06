import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { COURSES } from '../library-component/library-constants-component';

@Component({
  selector: 'app-course-4-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './course-4-component.html',
  styleUrl: './course-4-component.scss',
})
export class Course4Component {
  readonly backButtonLabel = 'Back';

  readonly title = COURSES[3].title;
  readonly contents = COURSES[3].contents;
}
