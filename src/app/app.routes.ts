import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        title: 'Home'
    },
    {
        path: 'mechanics',
        loadComponent: () => import('./pages/game-mechanics/game-mechanics.component').then(m => m.GameMechanicsComponent),
        title: 'Game Mechanics'
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
