import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CoursesTexts } from '../texts/courses-texts';

@Component({
  selector: 'app-course-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './course-component.html',
  styleUrl: './course-component.scss',
})
export class CourseComponent {
  constructor(private route: ActivatedRoute) {}

  readonly backButtonLabel = 'Back';

  courses = CoursesTexts;
  title = '';
  contents = '';

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.title = '';
      this.contents = '';

      const id = params.get('id') ?? '';
      const index = Number(id) - 1;
      if (id && Number.isInteger(index) && index >= 0) {
        const course = this.courses[index];
        if (course) {
          this.title = course.title;
          this.contents = course.contents;
        }
      }
    });
  }
}
