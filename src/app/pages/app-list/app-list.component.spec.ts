import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppListComponent } from './app-list.component';
import { ApplicationService } from '../../service/application.service';
import { provideHttpClient } from '@angular/common/http';

describe('AppListComponent', () => {
    let component: AppListComponent;
    let fixture: ComponentFixture<AppListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppListComponent],
            providers: [
                ApplicationService,
                provideHttpClient(),
            ]
        })
                .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
