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
  constructor() {}
}
