import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomMealComponent } from './room-meal.component';

describe('RoomMealComponent', () => {
  let component: RoomMealComponent;
  let fixture: ComponentFixture<RoomMealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomMealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
