import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { PsihoterapyComponent } from './psihoterapy-component/psihoterapy-component';
import { ContactEmailComponent } from './contact-email-component/contact-email-component';
import { LibraryComponent } from './courses-library-component/courses-library-component';
import { ArticleComponent } from './article-component/article-component';
import { CourseComponent } from './course-component/course-component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'psihotrerapy', component: PsihoterapyComponent },
  { path: 'send-message', component: ContactEmailComponent},
  { path: 'library', component: LibraryComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'course/:id', component: CourseComponent }
];