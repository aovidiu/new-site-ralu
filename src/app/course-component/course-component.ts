import { ChangeDetectionStrategy, Component, DOCUMENT, SecurityContext, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CoursesTexts } from '../texts/courses-texts';
import { DomSanitizer } from '@angular/platform-browser';
import { BackButtonComponent } from '../back-button-component/back-button-component';
import { Meta, Title } from '@angular/platform-browser';
import { setCanonicalLinkForIndex } from '../common/helpers';

@Component({
  selector: 'app-course-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, NgOptimizedImage, BackButtonComponent],
  templateUrl: './course-component.html',
  styleUrls: ['./course-component.scss'],
})
export class CourseComponent {
  private sanitizer = inject(DomSanitizer);
  private route = inject(ActivatedRoute);
  private meta = inject(Meta);
  private title = inject(Title);
  private document = inject(DOCUMENT);

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

          // Set SEO meta tags
          this.title.setTitle(`Cursuri pentru dezvoltare personală București - Cabinet Psihologie`);
          this.meta.updateTag({ name: 'description', content: `Curs de dezvoltare personală București: ${course.title}. Învață să gestionezi stresul, să îmbunătățești relațiile și să îți dezvolți abilitățile personale cu specialiști din București.` });
          this.meta.updateTag({ name: 'keywords', content: `curs dezvoltare personală București, ${course.title.toLowerCase()} București, psihologie București, terapie București, dezvoltare personală București` });
          setCanonicalLinkForIndex(this.document, `course/${id}`);
        }
      }
    });
  }
}
