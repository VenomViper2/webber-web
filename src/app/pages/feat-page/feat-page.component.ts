import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Feat } from "../../model/Feat";
import { FeatService } from "../../service/feat.service";
import { NotFoundComponent } from "../../errors/not-found/not-found.component";

@Component({
  selector: 'feat-page',
  standalone: true,
  imports: [CommonModule, NotFoundComponent],
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
}
