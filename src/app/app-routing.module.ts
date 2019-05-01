import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent,
    data: {state: 'homePage'} 
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {state: 'homePage'}
  },
  {
    path: 'gallery',
    pathMatch: 'full',
    component: HomeComponent,
    data: {state: 'galleryPage'}
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {state: 'aboutPage'}
  },
//   {
//     path: 'gallery/:title/default',
//     redirectTo: 'gallery/:title'
//   },
  // {
  //   path: 'gallery/:title/:album',
  //   component: GalleryComponent,
  //   data: {state: 'albumPage'}
  // },
  {
    path: 'gallery/:title',
    component: GalleryComponent,
    data: {state: 'galleryTitlePage'}
  },
  // {
  //   path: 'projects/:title',
  //   component: ProjectsComponent,
  //   data: {state: 'projectsPage'}
  // },
  // {
  //   path: 'gallery/:id',
  //   component: GalleryComponent
  // }
];

// const routerOptions: ExtraOptions = {
//   useHash: false,
//   anchorScrolling: 'enabled',
//   // ...any other options you'd like to use
// };


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
