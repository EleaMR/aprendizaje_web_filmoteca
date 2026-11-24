import { Routes } from '@angular/router';
import { Selector } from './pages/selector/selector';

export const routes: Routes = [
  {
    path: '',
    component: Selector,
    pathMatch: 'full',
  },
  {
    path: 'persona1',
    loadChildren: () =>
      import('./members/persona1/persona1.routes').then(
        (module) => module.persona1Routes,
      ),
  },
  {
    path: 'persona2',
    loadChildren: () =>
      import('./members/persona2/persona2.routes').then(
        (module) => module.persona2Routes,
      ),
  },
  {
    path: 'persona3',
    loadChildren: () =>
      import('./members/persona3/persona3.routes').then(
        (module) => module.persona3Routes,
      ),
  },
  {
    path: 'persona4',
    loadChildren: () =>
      import('./members/persona4/persona4.routes').then(
        (module) => module.persona4Routes,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
