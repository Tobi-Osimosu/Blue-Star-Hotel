import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss'],
})
export class HomeLandingComponent implements OnInit, AfterViewInit {
  @ViewChild('anim1', { static: false }) anim1: ElementRef;
  @ViewChild('anim2', { static: false }) anim2: ElementRef;
  @ViewChild('anim3', { static: false }) anim3: ElementRef;
  @ViewChildren('anim1, anim2, anim3') welcome: QueryList<any>;

  x = 0;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // this.welcome.forEach((welcome, index) => {
    //   console.log(welcome);
    //   gsap.from(welcome.nativeElement, {
    //     opacity: 0,
    //     duration: 1.5,
    //     y: -50,
    //     // delay: 0.6,
    //     delay: index-0.8
    //   });
    // });

    gsap.from(this.anim1.nativeElement, { opacity: 0, duration: 1, y: -50 });
    gsap.from(this.anim2.nativeElement, {
      opacity: 0,
      duration: 1,
      y: -50,
      delay: 0.3,
    });
    gsap.from(this.anim3.nativeElement, {
      opacity: 0,
      duration: 1,
      scale: 0.6,
      y: -50,
      delay: 0.6,
    });
  }
}
