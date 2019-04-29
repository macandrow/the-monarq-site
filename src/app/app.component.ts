import { Component, Renderer2 } from '@angular/core';
import { Router, Scroll, NavigationEnd, NavigationStart, RouterOutlet } from '@angular/router';
import { Location, ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { routerTransition } from './animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerTransition ],
})

export class AppComponent {
  previousUrl: string;
  title = 'the monarq';

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  constructor(private renderer: Renderer2, private router: Router) {
    this.router.events
      .subscribe((event) => {

        if (event instanceof NavigationStart) {
          if (this.previousUrl) {
            this.renderer.removeClass(document.body, this.previousUrl);
          }
          const currentUrlSlug = event.url.slice(1);
          if (currentUrlSlug) {
            this.renderer.addClass(document.body, currentUrlSlug);
          } else {
            this.renderer.addClass(document.body, "home");
          }
          this.previousUrl = currentUrlSlug;
        }
      });


  }



}
