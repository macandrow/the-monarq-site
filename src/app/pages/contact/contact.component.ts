import { Component, OnInit } from '@angular/core';
import * as typeformEmbed from '@typeform/embed'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    var el = document.getElementById("my-embedded-typeform");

    typeformEmbed.makeWidget(el, "https://themonarq.typeform.com/to/zsyz1K", {
      hideFooter: true,
      hideHeaders: true,
      opacity: 0,
      height: '500px'
    });
    // typeformEmbed.makePopup('https://themonarq.typeform.com/to/zsyz1K', {mode: 'popup', autoOpen: true})
 }
}
