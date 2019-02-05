import { Injectable } from '@angular/core';
import { Gallery } from 'src/app/shared/gallery-info';
import { GALLERIES } from 'src/app/shared/galleries';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class GalleryService {

  constructor() { }

  getGalleries(): Observable<Gallery[]> {
    return Observable.of(GALLERIES);
  }
  getGallery(id: number): Observable<Gallery> {
    return Observable.of(GALLERIES.filter((gallery) => (gallery.id === id))[0]);
  }
  getGalleryIds(): Observable<number[]> {
    return Observable.of(GALLERIES.map(gallery => gallery.id ));
  }
}