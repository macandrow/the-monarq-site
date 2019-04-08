import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectService } from './services/project.service';
import { GalleryService } from './services/gallery.service';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { FooterComponent } from './ui/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ProjectsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
    //  , HttpClientModule
  ],
  providers: [
    GalleryService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
