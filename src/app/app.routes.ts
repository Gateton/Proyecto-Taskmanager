import { Routes } from '@angular/router';
import { AboutComponent } from '../app/components/about.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    component: AboutComponent
  }
];