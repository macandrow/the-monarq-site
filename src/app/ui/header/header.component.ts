import { Component } from '@angular/core';
import { IGallery } from 'src/app/shared/gallery-info';
import { GalleryService } from 'src/app/services/gallery.service';
import * as typeformEmbed from '@typeform/embed'



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
  ngAfterViewInit(): void {
    const contactForm = typeformEmbed.makePopup(
      'https://themonarq.typeform.com/to/zsyz1K', 
      {
        mode: 'popup',
        autoClose: 3000,
        hideHeaders: true,
        hideFooters: true,
        hideScrollbars: true,
      }
    )
    document.getElementById('nav_open_contactForm').addEventListener('click', function(e){
      contactForm.open();
      e.preventDefault();
    });
  }
}

