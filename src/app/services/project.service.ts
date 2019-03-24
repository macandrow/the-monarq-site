import { Injectable } from '@angular/core';
import { Project } from 'src/app/shared/project-info';
import { PROJECTS } from 'src/app/shared/projects';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    return Observable.of(PROJECTS);
	}
	// getProjectAlbums(title: string, project){
  //   return Array.from(new Set(project.albums.filter((a)=>a.album).map(slide=>slide.album)));
  // }

}
