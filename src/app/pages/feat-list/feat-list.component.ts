import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatService } from "../../service/feat.service";
import { Feat } from "../../model/Feat";
import { CardComponent } from "../../component/card/card.component";

@Component({
  selector: 'feat-list',
  standalone: true,
  imports: [
    RouterLink,
    CardComponent
  ],
  templateUrl: './feat-list.component.html',
  styleUrl: './feat-list.component.css'
})
export class FeatListComponent implements OnInit {
  feats: Feat[] = [];
  title = 'Feat List';

  constructor(private featService: FeatService) {

  }

  ngOnInit(): void {
    this.featService.getAllFeats().subscribe(feats => {
      this.feats = feats;
    });
  }

  getColor(featName: string): "blue" | "red" | "green" | "yellow" | "gold" {
    if (featName.toLowerCase().includes('red')) {
      return 'red';
    }
    if (featName.toLowerCase().includes('blue')) {
      return 'blue';
    }
    if (featName.toLowerCase().includes('green')) {
      return 'green';
    }
    if (featName.toLowerCase().includes('gold')) {
      return 'gold';
    }
    return 'gold';
  }
}
