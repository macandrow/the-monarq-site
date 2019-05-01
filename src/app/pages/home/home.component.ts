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

  constructor(private galleryService: GalleryService, private projectService: ProjectService) {  }

  ngOnInit() {
    this.galleryService.getGalleries().subscribe(galleries => this.galleries = galleries);
    this.projectService.getProjects().subscribe(projects => this.projects = projects);

    $(document).ready(function () {
      $('.prettify').each(function() {
        var $this = $(this);
        $this.text($this.text().replace(/-/g, ' '));
      })
      $('.js-tilt').tilt({
        scale: 1,
        perspective: 500,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
        glare: true,
        maxGlare: .25,
      });
    });
  }

  ngOnDestroy(): void {
    // const body = document.getElementsByTagName('body')[0];
    // // body.classList.remove('color-fractures', 'color-photography', 'me');
    // body.removeAttribute('class');
  }	// onSelect(gallery: Gallery){
  // 	this.selectedGallery = gallery;
  // }
}




