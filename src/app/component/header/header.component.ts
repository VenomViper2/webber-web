// header.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationLink } from '../../model/NavigationLink';
import { ApplicationService } from '../../service/application.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  navigationLinks: NavigationLink[] = [
    {path: '/', label: 'Home', exact: true},
    {path: '/about', label: 'About'},
    {path: '/contact', label: 'Contact'},
    {path: '/app-list', label: 'Apps', dropdownItems: []},
  ];

  constructor(private appService: ApplicationService) {}

  ngOnInit() {
    this.appService.getAllApps().subscribe(apps => {
      const appLinks = apps.map(app => ({
        path: `/app-list/${app.id}`,  // Updated path
        label: app.name
      }));

      const appsNav = this.navigationLinks.find(nav => nav.path === '/app-list');
      if (appsNav) {
        appsNav.dropdownItems = appLinks;
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }
}
