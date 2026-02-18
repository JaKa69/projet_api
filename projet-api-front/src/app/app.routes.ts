import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./modules/login/login.component').then(c => c.LoginComponent),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./modules/users/users.component').then(c => c.UsersComponent),
      },
      {
        path: 'merchants',
        loadComponent: () =>
          import('./modules/merchants/merchants.component').then(c => c.MerchantsComponent),
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./modules/category/category.component').then(c => c.CategoryComponent),
      },
      {
        path: 'configurations',
        loadComponent: () =>
          import('./modules/configurations/configurations.component').then(c => c.ConfigurationsComponent),
      },
      {
        path: 'components',
        loadComponent: () =>
          import('./modules/components/components.component').then(c => c.ComponentsComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
