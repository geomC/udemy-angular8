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
      this.content = 'html paragraph';
    }, 1000);
  }

}
