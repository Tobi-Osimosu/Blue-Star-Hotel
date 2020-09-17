import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-our-facilities-landing',
  templateUrl: './our-facilities-landing.component.html',
  styleUrls: ['./our-facilities-landing.component.scss'],
})
export class OurFacilitiesLandingComponent implements OnInit, AfterViewInit {
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
