import { Component, Renderer2 } from '@angular/core';
import { Router, Scroll, NavigationEnd, NavigationStart, RouterOutlet } from '@angular/router';
import { Location, ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { routerTransition } from 'src/app/shared/animations';

declare var gtag;

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
  constructor(router: Router) {
    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );
    navEndEvents.subscribe((event:NavigationEnd)=>{
      gtag('config', 'UA-139880072-1', {
        'page_path': event.urlAfterRedirects
      });
    })
  }
}
