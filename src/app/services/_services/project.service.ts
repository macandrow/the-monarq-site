import { Injectable } from '@angular/core';
import { IProject } from 'src/app/shared/_models/project-info';
import { PROJECTS } from 'src/app/shared/_models/projects';
import { Observable } from 'rxjs';
import 'rxjs-compat/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Observable<IProject[]> {
    return Observable.of(PROJECTS);
  }

  getProjectTitles(): Observable<string[]> {
    return Observable.of(PROJECTS.map(project => project.title));
  }

  getProjectByTitle(title: string): Observable<IProject> {
    return Observable.of(PROJECTS.filter((project) => (project.title === title))[0]);
  }

  // getAlbums(): Observable<string[]> {
  //   return Observable.of(PROJECTS.map(name));
  // }
  getProjectAlbums(title: string, project) {
    return Array.from(new Set(project.albums.map(album => album.name)));
  }
  getDescriptions(title: string, project) {
    return Array.from(new Set(project.albums.map(album => album.description)));
  }
  // getDescriptions(): Observable<string[]> {
  //   return Array.from(new Set(project.albums.map(album => album.description)));
  // }
  // getIProjectAlbums(title: string, project){
  //   return Array.from(new Set(project.albums));
  // }


}
