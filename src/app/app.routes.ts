import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        title: 'Home'
    },
    {
        path: 'cheat-sheet',
        loadComponent: () => import('./pages/cheat-sheet/cheat-sheet.component').then(m => m.CheatSheetComponent),
        title: 'Cheat Sheet'
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
        path: 'character-list',
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/character-list/character-list.component').then(m => m.CharacterListComponent),
                title: 'Character List'
            },
            {
                path: ':id',
                loadComponent: () => import('./pages/character-page/character-page.component').then(m => m.CharacterPageComponent),
                title: 'Character'
            }
        ]
    },
    {
        path: '**',
        loadComponent: () => import('./errors/not-found/not-found.component').then(m => m.NotFoundComponent),
        title: '404 - Not Found'
    }
];
