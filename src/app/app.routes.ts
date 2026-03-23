import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { AboutComponent } from './about-component/about-component';
import { ContactEmail } from './contact-email/contact-email';
import { LibraryComponent } from './library-component/library-component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'send-message', component: ContactEmail},
  { path: 'library', component: LibraryComponent }
];