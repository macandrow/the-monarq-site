import { Component } from '@angular/core';
import { IGallery } from 'src/app/shared/gallery-info';
import { GalleryService } from 'src/app/services/gallery.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  galleries: IGallery[];


  constructor(private galleryService: GalleryService) { }
  ngOnInit() {
    this.galleryService.getGalleries().subscribe(galleries => this.galleries = galleries);
  }

}

