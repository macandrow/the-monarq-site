import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Params, ActivatedRoute, Router, Event, NavigationEnd} from '@angular/router';
import { Location } from '@angular/common';
import PhotoSwipe from 'photoswipe/dist/photoswipe.min.js';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.js';
import 'rxjs/add/operator/switchMap';
import { GalleryService } from 'src/app/services/gallery.service';
import { Gallery } from 'src/app/shared/gallery-info';
//import {type} from 'os';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: [
      ('../../../../node_modules/photoswipe/dist/photoswipe.css').toString(),
      ('../../../../node_modules/photoswipe/dist/default-skin/default-skin.css').toString(),
      './gallery.component.scss'
  ]
})
export class GalleryComponent implements OnInit {

  gallery: Gallery;
  galleryTitles: string[];
  prev: string;
  next: string;
  album: string;
  albums: {};
  activeSlides: {};
  gallerySlides: {};
  ps_gallery: any = null;
  ps_options: any;
  ps_element: any;
  firstImage: any;
  
  constructor(private galleryservice: GalleryService, private route: ActivatedRoute, private router: Router, private location: Location) {
    this.router.events.subscribe((event: Event)=>{
      if (event instanceof NavigationEnd) {
        this.album = route.snapshot.paramMap.get('album')!== null ? route.snapshot.paramMap.get('album'):'default';
        this.setActiveSlides();
      }
    });
  }

  ngOnInit() : void {

    this.galleryservice.getGalleryTitles().subscribe(galleryTitles => this.galleryTitles = galleryTitles);

    this.route.params
      .switchMap((params: Params) => this.galleryservice.getGalleryByTitle(params['title'])) // (+) converts string id to a number
      .subscribe(( gallery) => {
        this.albums = this.galleryservice.getGalleryAlbums(gallery.title, gallery);
        this.gallery = gallery;
        this.setActiveSlides();
        this.setPrevNext(gallery.title);

      });

  }
  galleryCarousel(i){
      this.gallerySlides = this.gallery.slides.filter((slide) => slide.album == i);
      this.ps_element = document.querySelectorAll('.pswp')[0];
      this.ps_options = {
          index: i !== null ? i : 0,
          showAnimationDuration: 400,
          showHideOpacity: true,

      };
      this.ps_gallery = new PhotoSwipe(this.ps_element, PhotoSwipeUI_Default, this.gallerySlides, this.ps_options);
      this.ps_gallery.init();
  }
  carousel(slide){
      this.ps_element = document.querySelectorAll('.pswp')[0];
      this.ps_options = {
          index: 0,
          showAnimationDuration: 400,
          showHideOpacity: true,

      };
      console.log('--  SLIDE --');
      console.log(slide);
      console.log(this.activeSlides);
      this.ps_gallery = new PhotoSwipe(this.ps_element, PhotoSwipeUI_Default, [slide], this.ps_options);
      this.ps_gallery.init();
  }

  getFirstImage(val){
     this.firstImage = this.gallery.slides.find(x=>x.album == val);
     return typeof this.firstImage !== 'undefined'?this.firstImage.src:'';
  }

  setActiveSlides(){
    if(this.gallery) {
      this.activeSlides = this.gallery.slides.filter((slide) => slide.album == this.album);
    }
  }

  setPrevNext(galleryId: string) {
    let index = this.galleryTitles.indexOf(galleryId);
    this.prev = this.galleryTitles[(this.galleryTitles.length + index - 1)%this.galleryTitles.length];
    this.next = this.galleryTitles[(this.galleryTitles.length + index + 1)%this.galleryTitles.length];
  }


  goBack(): void {
    this.location.back();
  }
}
