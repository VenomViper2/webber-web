import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Character } from "../../model/Character";
import { CharacterService } from "../../service/character.service";

@Component({
  selector: 'character-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: CharacterService) {

  }

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe(character => {
      this.characters = character;
    });
  }
}
