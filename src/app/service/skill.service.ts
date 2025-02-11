import { Injectable, signal } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Character } from "../model/Character";
import { Skill } from "../model/Skill";

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private skills = signal<Skill[]>([]);

  constructor(private http: HttpClient) {}


  getAllSkills(): Observable<Skill[]> {
    return this.http.get<any>('data/skills.json').pipe(
            map(data => {
              const skills: Skill[] = [];
              // Access the attributes object directly from the JSON structure
              const attributes = data.skillSystem.attributes;

              // Iterate through each attribute category
              for (const attributeKey in attributes) {
                const attributeSkills = attributes[attributeKey].skills;
                // Iterate through each skill in this attribute
                for (const skillKey in attributeSkills) {
                  const skill = attributeSkills[skillKey];
                  skills.push({
                    name: skill.name,
                    description: skill.description
                  });
                }
              }
              return skills;
            })
    );
  }


  getSkills() {
    return this.skills.asReadonly();
  }
}