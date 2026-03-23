import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { AboutComponent } from './about-component/about-component';
import { ContactEmail } from './contact-email/contact-email';
import { LibraryComponent } from './library-component/library-component';
import { Articol1 } from './articol-1/articol-1';
import { Articol2 } from './articol-2/articol-2';
import { Articol3 } from './articol-3/articol-3';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'send-message', component: ContactEmail},
  { path: 'library', component: LibraryComponent },
  { path: 'articol-1', component: Articol1 },
  { path: 'articol-2', component: Articol2 },
  { path: 'articol-3', component: Articol3 }
];