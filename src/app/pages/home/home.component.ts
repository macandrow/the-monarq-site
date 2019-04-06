import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGallery } from 'src/app/shared/_models/gallery-info';
import { GalleryService } from 'src/app/services/_services/gallery.service';
import { IProject } from 'src/app/shared/_models/project-info';
import { ProjectService } from 'src/app/services/_services/project.service';
import 'tilt.js';

// import { GALLERIES} from 'src/app/shared/galleries';
// import Tilt from 'tilt.js';
// const tilt = require('tilt');
//  import * as $ from 'jquery';

declare const $: any;

// import * as $ from 'jquery';
const tilt = $('.js-tilt').tilt();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit, OnDestroy {
  title = 'Look jQuery Animation working in action!';


  galleries: IGallery[];
  projects: IProject[];

  constructor(private galleryService: GalleryService, private projectService: ProjectService) {}

  ngOnInit() {
    this.galleryService.getGalleries().subscribe(galleries => this.galleries = galleries);
    this.projectService.getProjects().subscribe(projects => this.projects = projects);


    $(document).ready(function () {

      $('.js-tilt').tilt({
        scale: 1,
        perspective: 500,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
        glare: true,
        maxGlare: .25,
      });
    });
    $(window).scroll(function () {

      // selectors
      const $window = $(window),
        $body = $('body'),
        $panel = $('.row');

      // Change 33% earlier than scroll position so colour is there when you arrive.
      const scroll = $window.scrollTop() + ($window.height() / 5);

      $panel.each(function () {
        const $this = $(this);

        // if position is within range of this panel.
        // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
        // Remember we set the scroll to 33% earlier in scroll const.
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

          // Remove all classes on body with color-
          $body.removeClass(function (index, css) {
            return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
          });

          // Add class of currently active div
          $body.addClass('color-' + $(this).data('color'));
        } else if ($window.scrollTop() === 0) {
          $body.removeClass(function (index, css) {
            return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
          });
          $body.addClass('color-intro');
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




