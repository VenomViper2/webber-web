import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Character, Skills } from "../../model/Character";
import { CharacterService } from "../../service/character.service";
import { NgForOf, TitleCasePipe } from "@angular/common";
import { of } from "rxjs";

@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [
    NgForOf,
    TitleCasePipe
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

  getLevel(): number {
    if (!this.character) return 0;

    // Sum of attribute levels
    const attributeLevels = this.character.attribute.reduce((sum, attr) =>
            sum + attr.level, 0);

    // Count skills level 3 or higher
    const level3Skills = this.character.attribute.reduce((sum, attr) => {
      return sum + Object.values(attr.skills)
              .filter(skill => skill !== undefined && skill >= 3).length;
    }, 0);

    const totalSum = attributeLevels + level3Skills;

    // Calculate level based on total sum
    let level = 1;
    if (totalSum >= 30) level = 6;
    else if (totalSum >= 25) level = 5;
    else if (totalSum >= 20) level = 4;
    else if (totalSum >= 15) level = 3;
    else if (totalSum >= 10) level = 2;

    return level;
  }
}
