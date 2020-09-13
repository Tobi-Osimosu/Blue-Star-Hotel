import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject('windowObject') private window: Window
  ) {}

  ngOnInit() {
    this.window.addEventListener('resize', () => {
      if (matchMedia('(min-width: 992px)').matches) {
        this.closeMenu();
      }
    });
  }

  openMenu(event: Event) {
    const navButton = this.document.querySelector('.menu-wrapper');
    const navMenu = this.document.querySelector('.navLinks');

    navButton.classList.toggle('active');
    navMenu.classList.toggle('active');
    console.log('yeah');

    event.preventDefault();
    event.stopImmediatePropagation();
  }

  closeMenu() {
    const navButton = this.document.querySelector('.menu-wrapper');
    const navMenu = this.document.querySelector('.navLinks');

    if (navButton.classList.contains('active')) {
      navButton.classList.remove('active');
      navMenu.classList.remove('active');
    }
    console.log('yyysudb');
  }
}
