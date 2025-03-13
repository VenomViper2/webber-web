import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { ConfigService } from "../../service/config.service";


describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

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
                HeaderComponent,
                RouterModule.forRoot([])
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
