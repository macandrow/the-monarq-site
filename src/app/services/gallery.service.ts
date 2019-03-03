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
  getGalleryTitles(): Observable<string[]> {
    return Observable.of(GALLERIES.map(gallery => gallery.title ));
  }
  getGalleryByTitle(title: string): Observable<Gallery> {
    return Observable.of(GALLERIES.filter((gallery) => (gallery.title === title))[0]);
  }
  getGalleryAlbums(title: string, gallery){
    return Array.from(new Set(gallery.slides.filter((s)=>s.album !=='default').map(slide=>slide.album)));
  }


}
