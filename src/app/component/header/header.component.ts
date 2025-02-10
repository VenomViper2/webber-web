import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationLink } from '../../model/NavigationLink';
import { FeatService } from "../../service/feat.service";
import { CharacterService } from "../../service/character.service";

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
        {path: '/mechanics', label: 'Cheat Sheet', exact: true},
        {path: '/feat-list', label: 'Feats', dropdownItems: []},
        {path: '/character-list', label: 'Characters', dropdownItems: []},

    ];

    constructor(private featService: FeatService, private characterService: CharacterService) {
    }

    ngOnInit() {
        this.populateFeats();
        this.populateCharacters();
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

    populateCharacters() {
        this.characterService.getAllCharacters().subscribe(character => {
            const characterLinks = character.map(character => ({
                path: `/character-list/${ character.id }`,
                label: character.name
            }));

            const characterNav = this.navigationLinks.find(nav => nav.path === '/character-list');
            if (characterNav) {
                characterNav.dropdownItems = characterLinks;
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
