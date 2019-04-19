import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // var btn = $('#backToTop');
    // btn.on('click', function(e) {
    //   e.preventDefault();
    //   //alert("Hello! I am an alert box!!");
    //   $("html, body").animate({ scrollTop: 0 }, 600); 
    //     return false; 
    // });
  }
  // scrollToTop() {
  //   (function smoothscroll() {
  //     var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  //     if (currentScroll > 0) {
  //       window.requestAnimationFrame(smoothscroll);
  //       window.scrollTo(0, currentScroll - (currentScroll / 5));
  //     }
  //   })();
  // }
  scrollToTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
