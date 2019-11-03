import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AlertComponent } from './alert/alert.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  content: any;

  constructor(
    injector: Injector,
    domSanitizer: DomSanitizer
  ) {
    const AlertElement = createCustomElement(AlertComponent, { // configure the element..
      // ..e.g. the injector
      injector: injector
    });
    // Now we already have a custom element to use.

    // the following code is just normal JavaScript:
    // register the custom web component via customElements API

    customElements.define(
      'app-alert', // the tag
      AlertElement
    );

    // now we are save to use the element
    setTimeout(() => {
      this.content = domSanitizer.
      bypassSecurityTrustHtml('<app-alert message="Rendered dynamically"></app-alert>');
    }, 1000);
  }
}
