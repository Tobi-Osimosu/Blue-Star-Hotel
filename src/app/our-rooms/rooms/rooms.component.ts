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
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, AfterViewInit {
  @ViewChild('juniorRoom', { static: false }) juniorRoom: ElementRef;
  @ViewChild('jrText1', { static: false }) jrText1: ElementRef;
  @ViewChild('jrText2', { static: false }) jrText2: ElementRef;
  @ViewChild('jrText3', { static: false }) jrText3: ElementRef;
  @ViewChild('jrText4', { static: false }) jrText4: ElementRef;
  @ViewChild('jrBtns', { static: false }) jrBtns: ElementRef;
  @ViewChild('jrImg', { static: false }) jrImg: ElementRef;

  @ViewChild('luxuryRoom', { static: false }) luxuryRoom: ElementRef;
  @ViewChild('lrText1', { static: false }) lrText1: ElementRef;
  @ViewChild('lrText2', { static: false }) lrText2: ElementRef;
  @ViewChild('lrText3', { static: false }) lrText3: ElementRef;
  @ViewChild('lrText4', { static: false }) lrText4: ElementRef;
  @ViewChild('lrBtns', { static: false }) lrBtns: ElementRef;
  @ViewChild('lrImg', { static: false }) lrImg: ElementRef;

  @ViewChild('executiveRoom', { static: false }) executiveRoom: ElementRef;
  @ViewChild('erText1', { static: false }) erText1: ElementRef;
  @ViewChild('erText2', { static: false }) erText2: ElementRef;
  @ViewChild('erText3', { static: false }) erText3: ElementRef;
  @ViewChild('erText4', { static: false }) erText4: ElementRef;
  @ViewChild('erBtns', { static: false }) erBtns: ElementRef;
  @ViewChild('erImg', { static: false }) erImg: ElementRef;

  @ViewChild('superiorRoom', { static: false }) superiorRoom: ElementRef;
  @ViewChild('srText1', { static: false }) srText1: ElementRef;
  @ViewChild('srText2', { static: false }) srText2: ElementRef;
  @ViewChild('srText3', { static: false }) srText3: ElementRef;
  @ViewChild('srText4', { static: false }) srText4: ElementRef;
  @ViewChild('srBtns', { static: false }) srBtns: ElementRef;
  @ViewChild('srImg', { static: false }) srImg: ElementRef;

  @ViewChild('standardRoom', { static: false }) standardRoom: ElementRef;
  @ViewChild('strText1', { static: false }) strText1: ElementRef;
  @ViewChild('strText2', { static: false }) strText2: ElementRef;
  @ViewChild('strText3', { static: false }) strText3: ElementRef;
  @ViewChild('strText4', { static: false }) strText4: ElementRef;
  @ViewChild('strBtns', { static: false }) strBtns: ElementRef;
  @ViewChild('strImg', { static: false }) strImg: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: this.juniorRoom.nativeElement,
        start: "top center"
      },
    });

    tl.from(this.jrImg.nativeElement, { opacity: 0, x: -200 })
      .from(this.jrText1.nativeElement, { opacity: 0, y: -50 }, '-=0.4')
      .from(this.jrText2.nativeElement, { opacity: 0, y: -50 }, '-=0.5')
      .from(this.jrText3.nativeElement, { opacity: 0, y: -50 }, '-=0.6')
      .from(this.jrText4.nativeElement, { opacity: 0, y: -50 }, '-=0.7')
      .from(this.jrBtns.nativeElement, { opacity: 0, y: -50 }, '-=0.8');

    let tl2 = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: this.luxuryRoom.nativeElement,
        start: "top center"
      },
    });

    tl2
      .from(this.lrImg.nativeElement, { opacity: 0, x: 200 })
      .from(this.lrText1.nativeElement, { opacity: 0, y: -50 }, '-=0.4')
      .from(this.lrText2.nativeElement, { opacity: 0, y: -50 }, '-=0.5')
      .from(this.lrText3.nativeElement, { opacity: 0, y: -50 }, '-=0.6')
      .from(this.lrText4.nativeElement, { opacity: 0, y: -50 }, '-=0.7')
      .from(this.lrBtns.nativeElement, { opacity: 0, y: -50 }, '-=0.8');

    let tl3 = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: this.executiveRoom.nativeElement,
        start: "top center"
      },
    });

    tl3
      .from(this.erImg.nativeElement, { opacity: 0, x: -200 })
      .from(this.erText1.nativeElement, { opacity: 0, y: -50 }, '-=0.4')
      .from(this.erText2.nativeElement, { opacity: 0, y: -50 }, '-=0.5')
      .from(this.erText3.nativeElement, { opacity: 0, y: -50 }, '-=0.6')
      .from(this.erText4.nativeElement, { opacity: 0, y: -50 }, '-=0.7')
      .from(this.erBtns.nativeElement, { opacity: 0, y: -50 }, '-=0.8');

    let tl4 = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: this.superiorRoom.nativeElement,
        start: "top center"
      },
    });

    tl4
      .from(this.srImg.nativeElement, { opacity: 0, x: 200 })
      .from(this.srText1.nativeElement, { opacity: 0, y: -50 }, '-=0.4')
      .from(this.srText2.nativeElement, { opacity: 0, y: -50 }, '-=0.5')
      .from(this.srText3.nativeElement, { opacity: 0, y: -50 }, '-=0.6')
      .from(this.srText4.nativeElement, { opacity: 0, y: -50 }, '-=0.7')
      .from(this.srBtns.nativeElement, { opacity: 0, y: -50 }, '-=0.8');

      let tl5 = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: this.standardRoom.nativeElement,
          start: "top center"
        },
      });
  
      tl5.from(this.strImg.nativeElement, { opacity: 0, x: -200 })
        .from(this.strText1.nativeElement, { opacity: 0, y: -50 }, '-=0.4')
        .from(this.strText2.nativeElement, { opacity: 0, y: -50 }, '-=0.5')
        .from(this.strText3.nativeElement, { opacity: 0, y: -50 }, '-=0.6')
        .from(this.strText4.nativeElement, { opacity: 0, y: -50 }, '-=0.7')
        .from(this.strBtns.nativeElement, { opacity: 0, y: -50 }, '-=0.8');
  }
}
