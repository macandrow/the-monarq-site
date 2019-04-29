import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { GalleryService, ProjectService } from './_services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    GalleryService,
    ProjectService,
  ]
})
export class AppServicesModule {}
