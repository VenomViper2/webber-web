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
    loadComponent: () => import('./pages/app-list/app-list.component').then(m => m.AppListComponent),
    title: 'Application List'
  },
  {
    path: 'app/:id',  // Add this route
    loadComponent: () => import('./component/app-page/app-page.component').then(m => m.AppPageComponent),
    title: 'Application'
  },
  {
    path: '**',
    loadComponent: () => import('./errors/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: '404 - Not Found'
  }
];
