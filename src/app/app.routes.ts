import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { AboutComponent } from './about-component/about-component';
import { ContactEmailComponent } from './contact-email-component/contact-email-component';
import { LibraryComponent } from './library-component/library-component';
import { Articol1Component } from './articol-1-component/articol-1-component';
import { Articol2Component } from './articol-2-component/articol-2-component';
import { Articol3Component } from './articol-3-component/articol-3-component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'send-message', component: ContactEmailComponent},
  { path: 'library', component: LibraryComponent },
  { path: 'library-item-1', component: Articol1Component },
  { path: 'library-item-2', component: Articol2Component },
  { path: 'library-item-3', component: Articol3Component }
];