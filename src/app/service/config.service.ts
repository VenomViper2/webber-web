import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AppConfig {
  viperByteUrl: string;
  production: boolean;
}

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private config?: AppConfig;

  constructor(private http: HttpClient) {}

  loadConfig(): Promise<void> {
    return this.http.get<AppConfig>('config.json')
            .toPromise()
            .then(config => {
              this.config = config;
            });
  }

  get viperBytesUrl() {
    return this.config!.viperByteUrl;
  }
}
