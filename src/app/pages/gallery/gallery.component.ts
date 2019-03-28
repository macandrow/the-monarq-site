import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import PhotoSwipe from 'photoswipe/dist/photoswipe.min.js';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.js';
import 'rxjs/add/operator/switchMap';
import { GalleryService } from 'src/app/services/gallery.service';
import { IGallery } from 'src/app/shared/gallery-info';
import { ISlide } from '../../shared/gallery-slide';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @ViewChild('photoSwipe') photoSwipe: ElementRef;

  gallery: IGallery;
  galleryTitles: string[];
  prev: string;
  next: string;
  album: string;
  albums: {};
  activeSlides: {};
  pswp: PhotoSwipe = null;
  firstImage: any;

  constructor(private galleryservice: GalleryService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.album = route.snapshot.paramMap.get('album') !== null ? route.snapshot.paramMap.get('album') : 'default';
        this.setActiveSlides();
      }
    });
  }

  ngOnInit(): void {

    this.galleryservice.getGalleryTitles().subscribe(galleryTitles => this.galleryTitles = galleryTitles);

    this.route.params.switchMap((params: Params) =>
      this.galleryservice.getGalleryByTitle(params['title'])).subscribe(gallery => {
      this.albums = this.galleryservice.getGalleryAlbums(gallery.title, gallery);
      this.gallery = gallery;
      this.setActiveSlides();
      this.setPrevNext(gallery.title);
    });

  }

  openGallery(slide: ISlide) {

    const options = {
      index: 0,
      showHideOpacity: true,
      hideAnimationDuration: 0,
      showAnimationDuration: 0,
      loop: false,
      pinchToClose: false,
      closeOnVerticalDrag: false,
      closeOnScroll: false,
      maxSpreadZoom: 1,
      focus: false,
      modal: true,
      getDoubleTapZoom: (isMouseClick, item) => {
        return item.initialZoomLevel;
      },
      shareButtons: [
        {
          id: 'facebook',
          label: 'Share on Facebook',
          url: 'https://www.facebook.com/sharer/sharer.php?u={{url}}'
        },
        {
          id: 'twitter',
          label: 'Tweet',
          url: 'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'
        },
        {
          id: 'pinterest',
          label: 'Pin it',
          url: 'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}'
        }
      ],
    };

    this.pswp = new PhotoSwipe(this.photoSwipe.nativeElement, PhotoSwipeUI_Default, [slide], options);
    this.pswp.init();
  }

  getFirstImage(val) {
    this.firstImage = this.gallery.slides.find(x => x.album === val);
    return typeof this.firstImage !== 'undefined' ? this.firstImage.src : '';
  }

  setActiveSlides() {
    if (this.gallery) {
      this.activeSlides = this.gallery.slides.filter((slide) => slide.album === this.album);
    }
  }

  setPrevNext(galleryId: string) {
    const index = this.galleryTitles.indexOf(galleryId);
    this.prev = this.galleryTitles[(this.galleryTitles.length + index - 1) % this.galleryTitles.length];
    this.next = this.galleryTitles[(this.galleryTitles.length + index + 1) % this.galleryTitles.length];
  }


  goBack(): void {
    this.location.back();
  }
}
