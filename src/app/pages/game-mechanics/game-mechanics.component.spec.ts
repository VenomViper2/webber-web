import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMe } from './game-mechanics.component';

describe('CombatMechanicsComponent', () => {
  let component: GameMe;
  let fixture: ComponentFixture<GameMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameMe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameMe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
