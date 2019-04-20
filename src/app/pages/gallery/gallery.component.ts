import { Component, ElementRef, OnInit, ViewChild, HostBinding } from '@angular/core';
import {
  ActivatedRoute,
  Event,
  NavigationEnd,
  Params,
  Router
} from '@angular/router';
import { Location } from '@angular/common';
import PhotoSwipe from 'photoswipe/dist/photoswipe.min.js';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.js';
import 'rxjs/add/operator/switchMap';
import { GalleryService } from 'src/app/services/_services/gallery.service';
import { IGallery } from 'src/app/shared/_models/gallery-info';
import { ISlide } from '../../shared/_models/gallery-slide';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  // @HostBinding('class.gallery-frame') true;

  @ViewChild('photoSwipe') photoSwipe: ElementRef;

  objectKeys = Object.keys;
  gallery: IGallery;
  galleryTitles: string[];
  prev: string;
  next: string;
  album: string;
  albums: {};
  allSlides: ISlide[];
  coverSlides: ISlide[];
  decks: {};
  pswp: PhotoSwipe = null;
  firstImage: any;
  // figures = [];

  constructor(private galleryService: GalleryService,
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
    var btn = $('.backToTop');
    btn.on('click', function(e) {
      e.preventDefault();
      $('.gallery-scroller').animate({scrollTop:0}, '300');
    });
    this.galleryService.getGalleryTitles().subscribe(
      galleryTitles => this.galleryTitles = galleryTitles);

    this.route.params.switchMap((params: Params) =>
      this.galleryService.getGalleryByTitle(params['title'])).subscribe(
      gallery => {
        this.albums = this.galleryService.getGalleryAlbums(gallery.title, gallery);
        this.gallery = gallery;
        this.setActiveSlides();
        this.setPrevNext(gallery.title);
      });     
  }

  openGallery(slide: ISlide) {

    const options = {
      index: 0,
      showHideOpacity: true,
      hideAnimationDuration: 333,
      showAnimationDuration: 333,
      loop: false,
      pinchToClose: false,
      closeOnVerticalDrag: false,
      closeOnScroll: false,
      maxSpreadZoom: 1,
      focus: false,
      modal: true,
      zoomEl: false,
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

    const deckSlides = slide.deck
      ? this.allSlides.filter(x => x.deck === slide.deck).reverse()
      : [slide];

    this.pswp = new PhotoSwipe(this.photoSwipe.nativeElement, PhotoSwipeUI_Default, deckSlides, options);
    this.pswp.init();
  }

  setActiveSlides() {
    if (this.gallery) {
      this.allSlides = this.gallery.slides.filter(slide => slide.album === this.album);
      this.decks = {};
      this.coverSlides = [];
      for (const slide of this.allSlides) {
        if (slide.deck) {
          this.decks['' + slide.deck] = 1 + this.decks['' + slide.deck] || 0;
          if (this.decks['' + slide.deck] === 1) {
            this.coverSlides.push(slide);
          }
        } else {
          this.coverSlides.push(slide);
        }
      }
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
