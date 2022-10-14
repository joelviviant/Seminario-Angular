import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketContactComponent } from './rocket-contact.component';

describe('RocketContactComponent', () => {
  let component: RocketContactComponent;
  let fixture: ComponentFixture<RocketContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocketContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
