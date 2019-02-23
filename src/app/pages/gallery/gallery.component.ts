import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute, Router, Event, NavigationEnd} from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { GalleryService } from 'src/app/services/gallery.service';

import { Gallery } from 'src/app/shared/gallery-info';

import * as $ from 'jquery';
// import PhotoSwipe from 'photoswipe'
// import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
// Core JS file
import * as PhotoSwipe from 'photoswipe';
// UI JS file
import * as PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  gallery: Gallery;
  galleryTitles: string[];
  prev: string;
  next: string;
  album: string;
  albums: {};
  activeSlides: {};
  
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






      'use strict';

      /* global jQuery, PhotoSwipe, PhotoSwipeUI_Default, console */
      
      /*(function($) {
      
        // Init empty gallery array
        var container = [];
      
        // Loop over gallery items and push it to the array
        $('#gallery').find('figure').each(function() {
          var $link = $(this).find('a'),
            item = {
              src: $link.attr('href'),
              w: $link.data('width'),
              h: $link.data('height'),
              title: $link.data('caption')
            };
          alert($link.data('caption'));
          container.push(item);
        });
      
        // Define click event on gallery item
        $('#gallery a').click(function(event) {
      
          // Prevent location change
          event.preventDefault();
      
          // Define object and gallery options
          var $pswp = $('.pswp')[0],
            options = {
              index: $(this).parent('figure').index(),
              bgOpacity: 0.85,
              showHideOpacity: true
            };
          // Initialize PhotoSwipe
          var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
          gallery.init();
        });
      
      }(jQuery));*/
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
