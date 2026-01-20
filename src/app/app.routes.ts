import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/components/main-layout/main-layout').then(m => m.MainLayoutComponent),
    loadChildren: () => import('./layout/layout.routes').then(m => m.layoutRoutes),
  },
];
