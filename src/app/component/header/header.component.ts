import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationLink } from '../../model/NavigationLink';
import { FeatService } from "../../service/feat.service";

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
        {path: '/feat-list', label: 'Feats', dropdownItems: []},
    ];

    constructor(private featService: FeatService) {
    }

    ngOnInit() {
        this.populateFeats();
    }



    populateFeats() {
        this.featService.getAllFeats().subscribe(feat => {
            const featLinks = feat.map(feat => ({
                path: `/feat-list/${ feat.id }`,
                label: feat.name
            }));

            const featsNav = this.navigationLinks.find(nav => nav.path === '/feat-list');
            if (featsNav) {
                featsNav.dropdownItems = featLinks;
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
