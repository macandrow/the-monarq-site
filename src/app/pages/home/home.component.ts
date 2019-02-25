import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/shared/gallery-info';
import { GalleryService } from 'src/app/services/gallery.service';
// import { GALLERIES} from 'src/app/shared/galleries';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  // gallery: Gallery;
  galleries: Gallery[];
  // gallery: Gallery;

  // galleries: Gallery[] = GALLERIES;
	
	selectedGallery: Gallery;

  
  // constructor(private galleryService: GalleryService) {}

  constructor(private galleryService: GalleryService) {}

  ngOnInit() {
    this.galleryService.getGalleries()
    .subscribe(galleries => this.galleries = galleries);

    $(window).scroll(function() {
  
      // selectors
      var $window = $(window),
          $body = $('body'),
          $panel = $('.row');
      
      // Change 33% earlier than scroll position so colour is there when you arrive.
      var scroll = $window.scrollTop() + ($window.height() / 3);
     
      $panel.each(function () {
        var $this = $(this);
        
        // if position is within range of this panel.
        // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
        // Remember we set the scroll to 33% earlier in scroll var.
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
              
          // Remove all classes on body with color-
          $body.removeClass(function (index, css) {
            return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
          });
           
          // Add class of currently active div
          $body.addClass('color-' + $(this).data('color'));
        }
        else if ($window.scrollTop() == 0){
          $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
          });
        } 
      });    
      
    }).scroll();
    // const body = document.getElementsByTagName('body')[0];
    // body.classList.add('auth');
  }

  ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];
    // body.classList.remove('color-fractures', 'color-photography', 'me');
    body.removeAttribute('class');
  }	// onSelect(gallery: Gallery){
	// 	this.selectedGallery = gallery;
	// }
}




