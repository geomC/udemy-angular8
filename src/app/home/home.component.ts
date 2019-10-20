import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private router: Router // inject Router
  ) {}

  onLoadServers() {
    // do some complex calculations or do something async ...
    // now navigate
    this.router.navigate(
      ['/servers'] // elements of a path
    );
  }
}
