import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import {GalleryComponent} from './pages/gallery/gallery.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'gallery',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'gallery/:title/default',
    redirectTo: 'gallery/:title'
  },
  {
    path: 'gallery/:title/:album',
    component: GalleryComponent
  },
  {
    path: 'gallery/:title',
    component: GalleryComponent
  },
  
  // {
  //   path: 'gallery/:id',
  //   component: GalleryComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
