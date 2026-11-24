import { Routes } from '@angular/router';

export const persona3Routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((module) => module.Home),
  },
];
