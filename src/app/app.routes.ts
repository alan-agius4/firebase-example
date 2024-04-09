import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'ssr',
    loadComponent: () =>
      import('./ssr/ssr.component').then(({ SsrComponent }) => SsrComponent),
  },
  {
    path: 'ssg',
    loadComponent: () =>
      import('./ssg/ssg.component').then(({ SsgComponent }) => SsgComponent),
  },
  {
    path: 'csr',
    loadComponent: () =>
      import('./csr/csr.component').then(({ CsrComponent }) => CsrComponent),
  },
];
