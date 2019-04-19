import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ThemeService } from './theme.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Theme } from './symbols';

@Directive({
  selector: '[theme]'
})
export class ThemeDirective implements OnInit, OnDestroy {

  private _destroy$ = new Subject();
  @Input() theme: string;

  constructor(private _elementRef: ElementRef,
              private _themeService: ThemeService) {}

  ngOnInit() {
    if (this.theme) {
      this._themeService.setTheme(this.theme);
    }

    const active = this._themeService.getActiveTheme();
    if (active) {
      this.updateTheme(active);
    }

    this._themeService.themeChange.pipe(takeUntil(this._destroy$)).subscribe((theme: Theme) => this.updateTheme(theme));
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  updateTheme(theme: Theme) {
    // project properties onto the element
    for (const key in theme.properties) {
      this._elementRef.nativeElement.style.setProperty(key, theme.properties[key]);
    }

    // remove old theme
    for (const name of this._themeService.theme) {
      this._elementRef.nativeElement.classList.remove(`${ name }-theme`);
    }

    // alias element with theme name
    this._elementRef.nativeElement.classList.add(`${ theme.name }-theme`);
  }

}

