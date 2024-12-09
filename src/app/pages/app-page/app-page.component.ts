// app-page.component.ts
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApplicationService} from '../../service/application.service';
import {App} from '../../model/App';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-page.component.html',
  styleUrl: './app-page.component.css'
})

export class AppPageComponent implements OnInit {
  app?: App;

  constructor(
    private route: ActivatedRoute,
    private appService: ApplicationService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.appService.getApp(id).subscribe({
        next: (app) => {
          if (app) {
            this.app = app;
          }
        },
        error: (error) => {
          console.error('Error loading app:', error);
        }
      });
    });
  }
}
