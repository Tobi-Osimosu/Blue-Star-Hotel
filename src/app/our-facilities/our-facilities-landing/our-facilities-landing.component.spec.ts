import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFacilitiesLandingComponent } from './our-facilities-landing.component';

describe('OurFacilitiesLandingComponent', () => {
  let component: OurFacilitiesLandingComponent;
  let fixture: ComponentFixture<OurFacilitiesLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurFacilitiesLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurFacilitiesLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
