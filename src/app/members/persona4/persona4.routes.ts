import { Routes } from '@angular/router';

export const persona4Routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((module) => module.Home),
  },
  {
    path: 'prueba',
    loadComponent: () =>
      import('./pages/prueba/prueba').then((module) => module.Prueba),
  },
];
