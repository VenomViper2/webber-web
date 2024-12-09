// header.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import {NavigationLink} from '../model/NavigationLink';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  // App list
  appLinks: NavigationLink[] = [
    {path: '/app1', label: 'App1'},
    {path: '/app2', label: 'App2'},
    {path: '/app3', label: 'App3'},
  ];

  navigationLinks: NavigationLink[] = [
    {path: '/', label: 'Home', exact: true},
    {path: '/about', label: 'About'},
    {path: '/contact', label: 'Contact'},
    {path: '/app-list', label: 'Apps', dropdownItems: this.appLinks},
  ];
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }
}
