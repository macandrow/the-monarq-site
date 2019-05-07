import { Component } from '@angular/core';
import * as typeformEmbed from '@typeform/embed'



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  onClickMe() {
    var navMenu = document.getElementById("navMenu"); 
    if (navMenu.classList.contains("active")) { 
      navMenu.classList.remove("active");
    } 
  }

  constructor() { 
   
  }
  ngOnInit() {
    var $btn = $('.toggle');
    
    $btn.click(function(){
      $('#navMenu').toggleClass('active');
    })
  }

  ngAfterViewInit(): void {
    const contactForm = typeformEmbed.makePopup(
      'https://themonarq.typeform.com/to/zsyz1K', 
      {
        mode: 'popup',
        autoClose: 3000,
        hideHeaders: true,
        hideFooters: true,
        hideScrollbars: true,
      }
    )
    document.getElementById('nav_open_contactForm').addEventListener('click', function(e){
      contactForm.open();
      e.preventDefault();
    });
  }
}

