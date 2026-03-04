import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () =>
            import('./modules/login/login.component').then(c => c.LoginComponent),
    },
    {
        path: '', 
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'users',
            },
            {
                path: 'users',
                loadComponent: () =>
                import('./modules/users/users.component').then(c => c.UsersComponent),
            },
            {
                path: 'users/new',
                loadComponent: () =>
                    import('./modules/users/user-detail/user-detail.component').then(c => c.UserDetailComponent),
            },
            {
                path: 'users/:id',
                loadComponent: () =>
                    import('./modules/users/user-detail/user-detail.component').then(c => c.UserDetailComponent),
            },
            {
                path: 'merchants',
                loadComponent: () =>
                import('./modules/merchants/merchants.component').then(c => c.MerchantsComponent),
            },
            {
                path: 'merchants/add',
                loadComponent: () =>
                import('./modules/merchants/merchants-detail/merchants-detail').then(c => c.MerchantsDetail),
            },
            {
                path: 'merchants/:id',
                loadComponent: () =>
                import('./modules/merchants/merchants-detail/merchants-detail').then(c => c.MerchantsDetail),
            },
            {
                path: 'categories',
                loadComponent: () =>
                import('./modules/category/category.component').then(c => c.CategoryComponent),
            },
            {
                path: 'categories/add',
                loadComponent: () =>
                import('./modules/category/category-detail/category-detail').then(c => c.CategoryDetail),
            },
            {
                path: 'categories/:id',
                loadComponent: () =>
                import('./modules/category/category-detail/category-detail').then(c => c.CategoryDetail),
            },
            {
                path: 'configurations',
                loadComponent: () =>
                import('./modules/configurations/configurations.component').then(c => c.ConfigurationsComponent),
            },
            {
                path: 'configurations/add',
                loadComponent: () =>
                import('./modules/configurations/configuration-detail/configuration-detail').then(c => c.ConfigurationDetail),
            },
            {
                path: 'configurations/:id',
                loadComponent: () =>
                import('./modules/configurations/configuration-detail/configuration-detail').then(c => c.ConfigurationDetail),
            },
            {
                path: 'components',
                loadComponent: () =>
                    import('./modules/components/components.component').then(c => c.ComponentsComponent),
            },
            {
                path: 'components/add',
                loadComponent: () =>
                    import('./modules/components/components/component-detail/component-detail.component')
                    .then(c => c.ComponentDetailComponent),
            },
            {
                path: 'components/:id',
                loadComponent: () =>
                    import('./modules/components/components/component-detail/component-detail.component')
                    .then(c => c.ComponentDetailComponent),
            }
        ],
    },
    {
        path: '**',
        redirectTo: '',
    },
];
