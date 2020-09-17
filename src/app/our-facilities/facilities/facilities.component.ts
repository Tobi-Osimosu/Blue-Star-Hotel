import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
})
export class FacilitiesComponent implements OnInit, AfterViewInit {
  @ViewChild('healthCare', { static: false }) healthCare: ElementRef;
  @ViewChild('laundry', { static: false }) laundry: ElementRef;
  @ViewChild('internet', { static: false }) internet: ElementRef;
  @ViewChild('spa', { static: false }) spa: ElementRef;
  @ViewChild('restaurant', { static: false }) restaurant: ElementRef;
  @ViewChild('pool', { static: false }) pool: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: this.healthCare.nativeElement,
        start: 'top center',
      },
    });

    tl.from(this.healthCare.nativeElement, { opacity: 0, y: -50 });

    let tl2 = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: this.laundry.nativeElement,
        start: 'top center',
      },
    });

    tl2.from(this.laundry.nativeElement, { opacity: 0, y: -50 });

    let tl3 = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: this.internet.nativeElement,
        start: 'top center',
      },
    });

    tl3.from(this.internet.nativeElement, { opacity: 0, y: -50 });

    let tl4 = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: this.spa.nativeElement,
        start: 'top center',
      },
    });

    tl4.from(this.spa.nativeElement, { opacity: 0, y: -50 });

    let tl5 = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: this.restaurant.nativeElement,
        start: 'top center',
      },
    });

    tl5.from(this.restaurant.nativeElement, { opacity: 0, y: -50 });

    let tl6 = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: this.pool.nativeElement,
        start: 'top center',
      },
    });

    tl6.from(this.pool.nativeElement, { opacity: 0, y: -50 });
  }
}
