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
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss'],
})
export class HomeAboutComponent implements OnInit, AfterViewInit {
  @ViewChild('about', { static: false }) about: ElementRef;
  @ViewChild('img', { static: false }) img: ElementRef;
  @ViewChild('text1', { static: false }) text1: ElementRef;
  @ViewChild('text2', { static: false }) text2: ElementRef;
  @ViewChild('text3', { static: false }) text3: ElementRef;
  @ViewChild('text4', { static: false }) text4: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      defaults: {duration: 1},
      scrollTrigger: {
        trigger: this.about.nativeElement,
        toggleActions: 'restart none restart none',
        start: 'center bottom',
      },
    });

    tl.from(this.img.nativeElement, {x: -200, opacity: 0})
    .from(this.text1.nativeElement, {y: 50, opacity: 0}, "-=0.2")
    .from(this.text2.nativeElement, {y: 50, opacity: 0}, "-=0.4")
    .from(this.text3.nativeElement, {y: 50, opacity: 0}, "-=0.6")
    .from(this.text4.nativeElement, {y: 50, opacity: 0}, "-=0.8")
  }
}
