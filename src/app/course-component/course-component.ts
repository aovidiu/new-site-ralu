import { ChangeDetectionStrategy, Component, SecurityContext } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CoursesTexts } from '../texts/courses-texts';
import { DomSanitizer } from '@angular/platform-browser';
import { BackButtonComponent } from '../back-button-component/back-button-component';

@Component({
  selector: 'app-course-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, CommonModule, NgOptimizedImage, BackButtonComponent],
  templateUrl: './course-component.html',
  styleUrls: ['./course-component.scss'],
})
export class CourseComponent {
  constructor(private sanitizer: DomSanitizer,private route: ActivatedRoute) {}

  readonly backButtonLabel = 'Back';

  allCourses = CoursesTexts;
  selectedCourse = null as (typeof CoursesTexts)[number] | null;
  courseContents = '';

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedCourse = null;
      this.courseContents = '';

      const id = params.get('id') ?? '';
      const index = Number(id) - 1;
      if (id && Number.isInteger(index) && index >= 0) {
        const course = this.allCourses[index];
        if (course) {
          this.selectedCourse = course;
          this.courseContents = this.sanitizer.sanitize(SecurityContext.HTML, course.contents) ?? '';
        }
      }
    });
  }
}
