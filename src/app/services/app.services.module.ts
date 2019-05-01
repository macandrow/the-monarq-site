import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { GalleryService } from './_services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    GalleryService,
  ]
})
export class AppServicesModule {}
