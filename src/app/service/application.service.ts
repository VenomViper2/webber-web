import {Injectable} from '@angular/core';
import {App} from '../model/App';
import {HttpClient} from '@angular/common/http';
import {map, Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private applications: App[] = [];

  constructor(private http: HttpClient) {
  }

  getAllApps(): Observable<App[]> {
    return this.http.get<{ apps: App[] }>('data/apps.json')
      .pipe(
        map(response => response.apps),
        tap(apps => this.applications = apps)
      );
  }

}
