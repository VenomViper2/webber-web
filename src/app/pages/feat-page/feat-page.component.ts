import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Feat } from "../../model/Feat";
import { FeatService } from "../../service/feat.service";
import { NotFoundComponent } from "../../errors/not-found/not-found.component";
import { CardComponent } from "../../component/card/card.component";

@Component({
  selector: 'feat-page',
  standalone: true,
  imports: [CommonModule, NotFoundComponent, CardComponent],
  templateUrl: './feat-page.component.html',
  styleUrl: './feat-page.component.css'
})

export class FeatPageComponent implements OnInit {
  feat?: Feat;

  constructor(
          private route: ActivatedRoute,
          private featService: FeatService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.featService.getFeat(id).subscribe({
        next: (feat) => {
          if (feat) {
            this.feat = feat;
          }
        },
        error: (error) => {
          console.error('Error loading Feats:', error);
        }
      });
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
    return 'green';
  }
}
