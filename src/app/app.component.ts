import { ThemeService } from './theme.service';
import { routeAnimations } from './animations/routeAnimations.animation';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
})
export class AppComponent implements OnInit {
  theme: string;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.initTheme();
    this.themeService.initThemeIconRotation();

    this.themeService.theme.subscribe((response) => {
      this.theme = response;
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
