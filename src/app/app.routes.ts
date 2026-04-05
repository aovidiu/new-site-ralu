import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { PsihoterapyComponent } from './psihoterapy-component/psihoterapy-component';
import { ContactEmailComponent } from './contact-email-component/contact-email-component';
import { LibraryComponent } from './library-component/library-component';
import { Articol1Component } from './articol-1-component/articol-1-component';
import { Articol2Component } from './articol-2-component/articol-2-component';
import { Articol3Component } from './articol-3-component/articol-3-component';
import { Course1Component } from './course-1-component/course-1-component';
import { Course2Component } from './course-2-component/course-2-component';
import { Course3Component } from './course-3-component/course-3-component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'psihotrerapy', component: PsihoterapyComponent },
  { path: 'send-message', component: ContactEmailComponent},
  { path: 'library', component: LibraryComponent },
  { path: 'article-1', component: Articol1Component },
  { path: 'article-2', component: Articol2Component },
  { path: 'library-item-3', component: Articol3Component },
  { path: 'course-1', component: Course1Component },
  { path: 'course-2', component: Course2Component },
  { path: 'course-3', component: Course3Component }
];