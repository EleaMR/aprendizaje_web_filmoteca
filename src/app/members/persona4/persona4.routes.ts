import { Routes } from '@angular/router';

export const persona4Routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((module) => module.Home),
  },
];
