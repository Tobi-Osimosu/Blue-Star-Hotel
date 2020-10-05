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
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild('address', { static: false }) address: ElementRef;
  @ViewChild('email', { static: false }) email: ElementRef;
  @ViewChild('number', { static: false }) number: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: this.address.nativeElement,
        toggleActions: 'restart none restart none',
      },
    });

    tl.from(this.address.nativeElement, { opacity: 0, x: -200 });

    let tl2 = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: this.email.nativeElement,
        toggleActions: 'restart none restart none',
      },
    });

    tl2.from(this.email.nativeElement, { opacity: 0, x: -200 });

    let tl3 = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: this.number.nativeElement,
        toggleActions: 'restart none restart none',
      },
    });

    tl3.from(this.number.nativeElement, { opacity: 0, x: -200 });
  }
}
