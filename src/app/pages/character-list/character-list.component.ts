import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Character } from "../../model/Character";
import { CharacterService } from "../../service/character.service";
import { TitleCasePipe } from "@angular/common";
import { CardComponent } from "../../component/card/card.component";

@Component({
  selector: 'character-list',
  standalone: true,
  imports: [
    RouterLink,
    TitleCasePipe,
    CardComponent
  ],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent implements OnInit {
  title = 'Character List';
  characters: Character[] = [];

  constructor(private characterService: CharacterService) {

  }

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe(character => {
      this.characters = character;
    });
  }

  getColor(characterName: string): "blue" | "red" | "green" | "yellow" | "gold"| "orange" {
    if (characterName.toLowerCase().includes('jerik')) {
      return 'red';
    }
    if (characterName.toLowerCase().includes('blue')) {
      return 'blue';
    }
    if (characterName.toLowerCase().includes('wendwillow')) {
      return 'green';
    }
    if (characterName.toLowerCase().includes('demikas')) {
      return 'gold';
    }
    return 'orange';
  }
}
