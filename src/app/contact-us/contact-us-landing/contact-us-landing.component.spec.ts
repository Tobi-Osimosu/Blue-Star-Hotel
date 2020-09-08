import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsLandingComponent } from './contact-us-landing.component';

describe('ContactUsLandingComponent', () => {
  let component: ContactUsLandingComponent;
  let fixture: ComponentFixture<ContactUsLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
