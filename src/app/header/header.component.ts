import { ThemeService } from './../theme.service';
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
    @Inject('windowObject') private window: Window,
    private themeService: ThemeService
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
  }

  toggleTheme() {
    this.themeService.setTheme();
    this.themeService.rotateThemeIcon();
  }
}
