import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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

  it('should have navigation links', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('[routerLink="/"]')).toBeTruthy();
    expect(compiled.querySelector('[routerLink="/about"]')).toBeTruthy();
    expect(compiled.querySelector('[routerLink="/contact"]')).toBeTruthy();
  });
});
