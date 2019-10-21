import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private router: Router, // inject Router,
    private authService: AuthService
  ) {}

  onLoadServers() {
    // do some complex calculations or do something async ...
    // now navigate
    this.router.navigate(
      ['/servers'] // elements of a path
    );
  }

  onLoadServerOne(id: number) {
    this.router.navigate(['/servers', id, 'edit'],
      {
        queryParams: {allowEdit: '1'},
        fragment: 'loading'
      },
    );
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout()
  }
}
