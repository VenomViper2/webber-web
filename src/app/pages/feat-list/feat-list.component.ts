import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatService } from "../../service/feat.service";
import { Feat } from "../../model/Feat";

@Component({
  selector: 'feat-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './feat-list.component.html',
  styleUrl: './feat-list.component.css'
})
export class FeatListComponent implements OnInit {
  feats: Feat[] = [];

  constructor(private featService: FeatService) {

  }

  ngOnInit(): void {
    this.featService.getAllFeats().subscribe(feats => {
      this.feats = feats;
    });
  }
}
