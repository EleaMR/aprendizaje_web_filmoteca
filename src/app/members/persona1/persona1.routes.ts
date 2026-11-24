import { Routes } from '@angular/router';

export const persona1Routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((module) => module.Home),
  },
];
