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
	getProjectTitles(): Observable<string[]> {
		return Observable.of(PROJECTS.map(project => project.title ));
	}
	getProjectByTitle(title: string): Observable<Project> {
    return Observable.of(PROJECTS.filter((project) => (project.title === title))[0]);
	}
  // getAlbums(): Observable<string[]> {
  //   return Observable.of(PROJECTS.map(name));
	// }
	getProjectAlbums(title: string, project){
    return Array.from(new Set(project.albums.map(album=>album.name)));
  }
  // getProjectAlbums(title: string, project){
  //   return Array.from(new Set(project.albums));
  // }



}
