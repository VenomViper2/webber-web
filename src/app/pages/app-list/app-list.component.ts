import {Component, OnInit} from '@angular/core';
import {App} from '../../model/App';
import {ApplicationService} from '../../service/application.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './app-list.component.html',
  styleUrl: './app-list.component.css'
})
export class AppListComponent implements OnInit {
  apps: App[] = [];

  constructor(private appService: ApplicationService) {

  }

  ngOnInit(): void {
    this.apps = this.appService.getAllApps();
  }
}
