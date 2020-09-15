import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  storedTheme: string = localStorage.getItem('theme-color');
  theme = new BehaviorSubject<string>('light-mode');

  constructor(@Inject(DOCUMENT) private document: Document) {}

  initTheme() {
    // If local storage is empty
    if (!this.storedTheme) {
      localStorage.setItem('theme-color', 'light-mode');
      this.storedTheme = 'light-mode';
      this.theme.next(this.storedTheme);
    } else {
      this.theme.next(this.storedTheme);
    }
    
    if (this.storedTheme === 'dark-mode') {
      this.rotateThemeIcon();
    }
  }

  setTheme() {
    if (this.storedTheme === 'dark-mode') {
      localStorage.setItem('theme-color', 'light-mode');
      this.storedTheme = localStorage.getItem('theme-color');
      this.theme.next(this.storedTheme);
    } else {
      localStorage.setItem('theme-color', 'dark-mode');
      this.storedTheme = localStorage.getItem('theme-color');
      this.theme.next(this.storedTheme);
    }

    this.document.body.classList.add('animate-colors-transition');
  }

  rotateThemeIcon() {
    this.document
      .querySelector('.theme-icon')
      .classList.toggle('rotate-theme-icon');
  }
}
