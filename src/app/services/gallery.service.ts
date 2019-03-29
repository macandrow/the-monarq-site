import { Injectable } from '@angular/core';
import { IGallery } from 'src/app/shared/gallery-info';
import { GALLERIES } from 'src/app/shared/galleries';
import { Observable } from 'rxjs';
import 'rxjs-compat/add/observable/of';

@Injectable()
export class GalleryService {

  constructor() { }

  getGalleries(): Observable<IGallery[]> {
    return Observable.of(GALLERIES);
  }

  getGallery(id: number): Observable<IGallery> {
    return Observable.of(GALLERIES.filter((gallery) => (gallery.id === id))[0]);
  }

  getGalleryIds(): Observable<number[]> {
    return Observable.of(GALLERIES.map(gallery => gallery.id));
  }

  getGalleryTitles(): Observable<string[]> {
    return Observable.of(GALLERIES.map(gallery => gallery.title));
  }

  getGalleryByTitle(title: string): Observable<IGallery> {
    return Observable.of(GALLERIES.filter((gallery) => (gallery.title === title))[0]);
  }

  getGalleryAlbums(title: string, gallery) {
    return Array.from(new Set(gallery.slides.filter((s) => s.album !== 'default').map(slide => slide.album)));
  }


}
