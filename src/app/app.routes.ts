import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        title: 'Home'
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
        title: 'About'
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
        title: 'Contact'
    },
    {
        path: 'app-list',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/app-list/app-list.component').then(m => m.AppListComponent),
                title: 'Application List'
            },
            {
                path: ':id',
                loadComponent: () => import('./pages/app-page/app-page.component').then(m => m.AppPageComponent),
                title: 'Application'
            }
        ]
    },
    {
        path: 'feat-list',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/feat-list/feat-list.component').then(m => m.FeatListComponent),
                title: 'Feat List'
            },
            {
                path: ':id',
                loadComponent: () => import('./pages/feat-page/feat-page.component').then(m => m.FeatPageComponent),
                title: 'Feat'
            }
        ]
    },
    {
        path: '**',
        loadComponent: () => import('./errors/not-found/not-found.component').then(m => m.NotFoundComponent),
        title: '404 - Not Found'
    }
];
