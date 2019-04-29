import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from 'src/app/services/_services/project.service';
import { IProject } from 'src/app/shared/_models/project-info';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  project: IProject;
  projectTitles: string[];
  album: string;
  albums: {};
  projectAlbums: string[];

  constructor(private projectservice: ProjectService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) {
    // this.router.events.subscribe((event: Event)=>{
    //   if (event instanceof NavigationEnd) {
    //     this.album = route.snapshot.paramMap.get('album');
    //   }
    // });
  }

  ngOnInit(): void {

    this.projectservice.getProjectTitles().subscribe(projectTitles => this.projectTitles = projectTitles);
    // this.projectservice.getAlbums().subscribe(projectAlbums => this.projectAlbums = projectAlbums);

    this.route.params.switchMap((params: Params) => this.projectservice.getProjectByTitle(params['title'])) // (+) converts string id to a number
         .subscribe((project) => {
           this.albums = this.projectservice.getProjectAlbums(name, project);
           // this.albums=params.get('album');
           // this.albums = this.projectservice.getProjectAlbums(project.title, project);
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
