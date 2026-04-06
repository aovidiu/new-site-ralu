import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { COURSES } from '../library-component/library-constants-component';

@Component({
  selector: 'app-course-2-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './course-2-component.html',
  styleUrl: './course-2-component.scss',
})
export class Course2Component {
  readonly backButtonLabel = 'Back';

  courses = COURSES;
  title = COURSES[1].title;
  contents = COURSES[1].contents;
}
