import { TestBed } from '@angular/core/testing';

import { ApplicationService } from './application.service';
import { provideHttpClient } from '@angular/common/http';

describe('ApplicationService', () => {
    let service: ApplicationService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideHttpClient()],
        });
        service = TestBed.inject(ApplicationService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
