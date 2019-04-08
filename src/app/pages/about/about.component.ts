import { Component, OnInit } from '@angular/core';
import * as typeformEmbed from '@typeform/embed'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    // var el = document.getElementById("my-embedded-typeform");

    // typeformEmbed.makeWidget(el, "https://themonarq.typeform.com/to/zsyz1K", {
    //   mode: 'drawer_right',
    //   autoClose: 3000,
    //   hideHeaders: true,
    //   hideFooters: true,
    // });
    
    // typeformEmbed.makePopup('https://themonarq.typeform.com/to/zsyz1K', {mode: 'popup', autoOpen: true})

    //the below works
    const contactForm = typeformEmbed.makePopup(
      'https://themonarq.typeform.com/to/zsyz1K', // NOTE: Replace with your typeform URL
      {
        mode: 'popup',
        autoClose: 3000,
        hideHeaders: true,
        hideFooters: true,
        hideScrollbars: true,
      }
    )
    document.getElementById('open_contactForm').addEventListener('click', function(e){
      contactForm.open();
      e.preventDefault();
    });
    
    // Here we are getting an existing element on your HTML
  // const embedElement = document.querySelector('.js-typeform-embed')
  
  // typeformEmbed.makeWidget(
  //   embedElement,
  //   'https://themonarq.typeform.com/to/zsyz1K',
  //   {
  //     hideScrollbars: true,
  //     hideHeaders: true,
  //     hideFooters: true,
  //   }
  // )
 }
}