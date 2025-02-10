import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Character } from "../../model/Character";
import { CharacterService } from "../../service/character.service";
import { TitleCasePipe } from "@angular/common";

@Component({
  selector: 'character-list',
  standalone: true,
  imports: [
    RouterLink,
    TitleCasePipe
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
