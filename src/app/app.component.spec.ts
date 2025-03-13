import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { ConfigService } from "./service/config.service";


describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                    provideHttpClient(),
                {
                    provide: ConfigService,
                    useValue: {
                        loadConfig: () => Promise.resolve(),
                        viperBytesUrl: 'https://test-url.com'
                    }
                }
            ],
            imports: [
                AppComponent,
                RouterModule.forRoot([])
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
