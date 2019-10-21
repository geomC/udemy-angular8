import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean { // can work synchronously or async (e.g. if we have to reach out to a server)
    return this.authService.isAuthenticated()
      .then( (isAuthenticated: boolean) => {
        if (isAuthenticated) {
          return true;
        } else {
          this.router.navigate(['/']);
        }
    });
  }

}
