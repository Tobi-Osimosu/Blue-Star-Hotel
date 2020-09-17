import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-contact-us-landing',
  templateUrl: './contact-us-landing.component.html',
  styleUrls: ['./contact-us-landing.component.scss'],
})
export class ContactUsLandingComponent implements OnInit, AfterViewInit {
  @ViewChild('anim1', { static: false }) anim1: ElementRef;
  @ViewChild('anim2', { static: false }) anim2: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    gsap.from(this.anim1.nativeElement, { opacity: 0, y: -50, duration: 1 });
    gsap.from(this.anim2.nativeElement, {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.5,
    });
  }
}
