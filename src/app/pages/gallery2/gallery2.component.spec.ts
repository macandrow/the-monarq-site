import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery2Component } from './gallery.component';

describe('GalleryComponent', () => {
  let component: Gallery2Component;
  let fixture: ComponentFixture<Gallery2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
