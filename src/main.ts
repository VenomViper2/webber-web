import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ConfigService } from "./app/service/config.service";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";


export function initConfig(config: ConfigService) {
    return () => config.loadConfig();
}

bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(),
        ConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: initConfig,
            deps: [ConfigService],
            multi: true
        },
        provideRouter(routes)
    ]
});
