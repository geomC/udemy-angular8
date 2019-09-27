import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  buttonClicks: string[] = [];

  logClick() {
    this.buttonClicks.push(
      new Date().toLocaleTimeString()
    );
  }
}
