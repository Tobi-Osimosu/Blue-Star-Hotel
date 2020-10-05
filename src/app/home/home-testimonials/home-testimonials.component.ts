import {
  Component,
  OnInit,
  Inject,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home-testimonials',
  templateUrl: './home-testimonials.component.html',
  styleUrls: ['./home-testimonials.component.scss'],
})
export class HomeTestimonialsComponent implements OnInit, AfterViewInit {
  config: SwiperConfigInterface = {
    direction: 'horizontal',
    loop: true,
    // slidesPerView: 3,
    spaceBetween: 19,
    keyboard: true,
    navigation: true,
    autoplay: {
      delay: 5000,
    },
    followFinger: true,
    // effect: 'coverflow',
  };

  @ViewChild('testimonials', { static: false }) testimonials: ElementRef;
  @ViewChild('text1', { static: false }) text1: ElementRef;
  @ViewChild('text2', { static: false }) text2: ElementRef;
  @ViewChild('swiper', { static: false }) swiper: ElementRef;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject('windowObject') private window: Window
  ) {}

  ngOnInit() {
    this.manageSlide();
  }

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: this.testimonials.nativeElement,
        toggleActions: 'restart none none none',
        start: 'center bottom',
      },
    });

    tl.from(this.text1.nativeElement, { y: -50, opacity: 0 })
      .from(this.text2.nativeElement, { y: -50, opacity: 0 }, '-=0.5')
      .from(this.swiper.nativeElement, { opacity: 0, scale: 0 }, '-=0.65');
  }

  manageSlide() {
    if (matchMedia('(max-width: 767.98px)').matches) {
      this.config.slidesPerView = 1;
      this.config.effect = 'slide';
    } else if (matchMedia('(max-width: 991.98px)').matches) {
      this.config.slidesPerView = 2;
      this.config.effect = 'slide';
    } else if (matchMedia('(min-width: 992px)').matches) {
      this.config.slidesPerView = 3;
      this.config.effect = 'coverflow';
    }
  }
}
