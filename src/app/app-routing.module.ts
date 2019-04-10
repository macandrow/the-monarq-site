import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {
      animation: {
        value: 'home',
      }
    }
  },

  {
    path: 'gallery',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      animation: {
        value: 'about',
      }
    }
  },
//   {
//     path: 'gallery/:title/default',
//     redirectTo: 'gallery/:title'
//   },
  {
    path: 'gallery/:title/:album',
    component: GalleryComponent
  },
  {
    path: 'gallery/:title',
    component: GalleryComponent
  },
  {
    path: 'projects/:title',
    component: ProjectsComponent
  },
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
