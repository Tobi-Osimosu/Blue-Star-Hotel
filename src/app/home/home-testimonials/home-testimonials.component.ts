import { Component, OnInit, Inject } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home-testimonials',
  templateUrl: './home-testimonials.component.html',
  styleUrls: ['./home-testimonials.component.scss'],
})
export class HomeTestimonialsComponent implements OnInit {
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

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject('windowObject') private window: Window
  ) {}

  ngOnInit() {
    this.manageSlide();
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
