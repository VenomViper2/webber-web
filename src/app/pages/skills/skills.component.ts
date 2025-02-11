import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { SkillService } from "../../service/skill.service";
import { Skill } from '../../model/Skill';
import { CardComponent } from "../../component/card/card.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit{
  title = 'Skills';
  skills: WritableSignal<Skill[]> = signal([]);

  constructor(private skillService: SkillService) {}


  ngOnInit(): void {
    this.getSkills()
  }
  getSkills() {
    this.skillService.getAllSkills().subscribe(skills => {
      this.skills.set(skills);
    });
  }
}