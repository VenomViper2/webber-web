import {Injectable} from '@angular/core';
import {App, AppCard} from '../model/App';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private applications: App[] = [];

  constructor(private http: HttpClient) {
    this.loadApps();
  }

  getCards(): AppCard[] {
    return this.applications.map((app: App) => ({
      id: app.id,
      name: app.name,
      description: app.description,
      imagePath: app.images[1]
    }));
  }


  getAllApps(): App[] {
    return this.applications;
  }

  getApp(id: string): App | undefined {
    return this.applications.find(app => app.id === id);
  }

  private loadApps() {
    this.http.get<{ apps: App[] }>('data/apps.json')
      .subscribe({
        next: (data) => {
          this.applications = data.apps;
        },
        error: (error) => {
          console.error('Error loading apps:', error);
        }
      });
  }

}
