import { ComponentFixture, TestBed } from '@angular/core/testing';

import { burgerListComponent } from './burger-list.component';

describe('burgerListComponent', () => {
  let component: burgerListComponent;
  let fixture: ComponentFixture<burgerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ burgerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(burgerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
