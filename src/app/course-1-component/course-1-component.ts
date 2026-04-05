import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { COURSES } from '../library-component/library-constants-component';

@Component({
  selector: 'app-course-1-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './course-1-component.html',
  styleUrl: './course-1-component.scss',
})
export class Course1Component {
  readonly backButtonLabel = 'Back';

  courses = COURSES;
  title = COURSES[0].title;
  contents = COURSES[0].contents;
}
