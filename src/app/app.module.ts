import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
// import { ProjectService } from './services/project.service';
// import { GalleryService } from './services/gallery.service';
// import { GalleryComponent } from './pages/gallery/gallery.component';
// import { ProjectsComponent } from './pages/projects/projects.component';
import { FooterComponent } from './ui/footer/footer.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AppServicesModule } from './services/app.services.module';
import { ThemeModule } from './theme/theme.module';
import { darkTheme, lightTheme } from './theme/themes';

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
    AppRoutingModule,
    ScrollToModule.forRoot(),
    AppServicesModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light'
    }),
    //  , HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
