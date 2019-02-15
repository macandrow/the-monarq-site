import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import {Gallery2Component} from './pages/gallery2/gallery2.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  {
    path: '',
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
    path: 'gallery/:title/:id',
    component: GalleryComponent
  },
  {
    path: 'gallery2/:title',
    component: Gallery2Component
  }
  
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
