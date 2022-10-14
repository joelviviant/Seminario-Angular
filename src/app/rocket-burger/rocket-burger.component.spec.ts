import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketBurgerComponent } from './rocket-burger.component';

describe('RocketBurgerComponent', () => {
  let component: RocketBurgerComponent;
  let fixture: ComponentFixture<RocketBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketBurgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocketBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
