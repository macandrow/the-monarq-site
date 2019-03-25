import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // $(function () {
    //   $('.dropdown').hover(function(e) {
    //     $('.gallery-links').toggleClass('active');
    //     e.stopPropagation();
    //   });
    // });
  }

}

