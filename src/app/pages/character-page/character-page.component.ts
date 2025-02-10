import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Character, Skills } from "../../model/Character";
import { CharacterService } from "../../service/character.service";
import { NgForOf, TitleCasePipe } from "@angular/common";
import { NotFoundComponent } from "../../errors/not-found/not-found.component";

@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [
    NgForOf,
    TitleCasePipe,
    NotFoundComponent
  ],
  templateUrl: './character-page.component.html',
  styleUrl: './character-page.component.css'
})
export class CharacterPageComponent implements OnInit{
  character?: Character;

  constructor(
          private route: ActivatedRoute,
          private characterService: CharacterService
  ) {
  }

  ngOnInit() {
    this.initCharacter();
  }

  private initCharacter() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.characterService.getCharacter(id).subscribe({
        next: (character) => {
          if (character) {
            this.character = character;
          }
        },
        error: (error) => {
          console.error('Error loading Character:', error);
        }
      });
    });
  }

  getSkills(skills: Skills): {name: string, value: number}[] {
    return Object.entries(skills)
            .filter(([_, value]) => value !== undefined)
            .map(([name, value]) => ({name, value: value!}));
  }

  getLightLevel(color: string): number {
    if (!this.character || !this.character.attribute) {
      return 0;
    }
    switch (color) {
      case 'red':
        return this.character.attribute[0].level + this.getLevel();
      case 'green':
        return this.character.attribute[1].level + this.getLevel();
      case 'blue':
        return this.character.attribute[2].level + this.getLevel();
      case 'gold':
        return this.character.attribute[3].level + this.getLevel();
      default:
        return 0;
    }
  }

  getLevel(): number {
    if (!this.character) return 0;

    const attributeLevels = this.character.attribute.reduce((sum, attr) =>
            sum + attr.level, 0);

    const level3Skills = this.character.attribute.reduce((sum, attr) => {
      return sum + Object.values(attr.skills)
              .filter(skill => skill !== undefined && skill >= 3).length;
    }, 0);

    const totalSum = attributeLevels + level3Skills;

    let level = 1;
    if (totalSum >= 30) level = 6;
    else if (totalSum >= 25) level = 5;
    else if (totalSum >= 20) level = 4;
    else if (totalSum >= 15) level = 3;
    else if (totalSum >= 10) level = 2;

    return level;
  }
}
