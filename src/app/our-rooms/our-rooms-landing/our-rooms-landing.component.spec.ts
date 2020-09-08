import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurRoomsLandingComponent } from './our-rooms-landing.component';

describe('OurRoomsLandingComponent', () => {
  let component: OurRoomsLandingComponent;
  let fixture: ComponentFixture<OurRoomsLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurRoomsLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurRoomsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
