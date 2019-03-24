import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Params, ActivatedRoute, Router, Event, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';
import { Location } from '@angular/common';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/shared/project-info';
import { Album } from 'src/app/shared/project-album';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
	
  project: Project;
  projectTitles: string[];
  album: string;
  albums: {};
  projectAlbums: string[];
	
  constructor(private projectservice: ProjectService, private route: ActivatedRoute, private router: Router, private location: Location) {}
	
	ngOnInit() : void {

    this.projectservice.getProjectTitles().subscribe(projectTitles => this.projectTitles = projectTitles);
		//this.projectservice.getAlbums().subscribe(projectAlbums => this.projectAlbums = projectAlbums);

    this.route.params
      .switchMap((params: Params) => this.projectservice.getProjectByTitle(params['title'])) // (+) converts string id to a number
      .subscribe(( project) => {
				//this.albums = this.projectservice.getProjectAlbums;
				//this.albums=params.get('album');
        //this.albums = this.projectservice.getProjectAlbums(project.title, project);
        this.project = project;
      });

	}
	

  // ngOnInit() : void {
	// 	// subscribe to the parameters observable
	// 	this.projectservice.getProjectTitles().subscribe(projectTitles => this.projectTitles = projectTitles);

	// 	this.route.paramMap.subscribe((params : ParamMap)=> {  
  //     // this.student.id=params.get('id');  
	// 		// this.student.name=params.get('name');  
	// 		this.project.title= params.get('title');
	// 	});
	// }

}
