import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({ standalone: true, template: '' })
class HomeStubComponent {}

@Component({ standalone: true, template: '' })
class AboutStubComponent {}

@Component({ standalone: true, template: '' })
class ContactStubComponent {}

@Component({ standalone: true, template: '' })
class NotFoundStubComponent {}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HeaderComponent,
        RouterModule.forRoot([
          { path: '', component: HomeStubComponent },
          { path: 'about', component: AboutStubComponent },
          { path: 'contact', component: ContactStubComponent },
          { path: '**', component: NotFoundStubComponent }
        ])
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
