// app-page.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from '../../service/application.service';
import { App } from '../../model/App';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (app) {
      <div class="app-container">
        <h1>{{ app.name }}</h1>
        <img [src]="app.images[0]" [alt]="app.name">
        <p class="description">{{ app.fullDescription }}</p>
        <!-- Add more app details here -->
      </div>
    } @else {
      <div>App not found</div>
    }
  `,
  styles: [`
    .app-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      margin: 1rem 0;
    }

    .description {
      line-height: 1.6;
      color: #333;
    }
  `]
})
export class AppPageComponent implements OnInit {
  app?: App;

  constructor(
    private route: ActivatedRoute,
    private appService: ApplicationService
  ) {}

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
