import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalPhotosComponent } from './hospital-photos.component';

describe('HospitalPhotosComponent', () => {
  let component: HospitalPhotosComponent;
  let fixture: ComponentFixture<HospitalPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
