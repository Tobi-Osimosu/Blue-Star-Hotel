import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


@Component({
  selector: 'app-home-subscribe',
  templateUrl: './home-subscribe.component.html',
  styleUrls: ['./home-subscribe.component.scss']
})
export class HomeSubscribeComponent implements OnInit, AfterViewInit {
  @ViewChild('subscribe', { static: false }) subscribe: ElementRef;
  @ViewChild('text1', { static: false }) text1: ElementRef;
  @ViewChild('text2', { static: false }) text2: ElementRef;
  @ViewChild('form', { static: false }) form: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      defaults: {duration: 1},
      scrollTrigger: {
        trigger: this.subscribe.nativeElement,
        toggleActions: 'restart none none none',
        start: "top center"
      }
    });

    tl.from(this.text1.nativeElement, {opacity: 0, x: -200})
    .from(this.text2.nativeElement, {opacity: 0, x: -200})
    .from(this.form.nativeElement, {opacity: 0, x: 200}, "-=0.5")
  }

}
