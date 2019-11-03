import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  content: any;

  constructor() {
    setTimeout(() => {
      // this is not rendered since the element is not known to the browser.
      // At the time this is added to the dom, ng will not consider it for rendering.
      this.content = '<app-alert message="Rendered dynamically"></app-alert>';
    }, 1000); // the timeout is just to simulate an async data flow, e.g. an api call

    // this also won't work here
    this.content = '<app-alert message="Rendered dynamically"></app-alert>';
  }

}
