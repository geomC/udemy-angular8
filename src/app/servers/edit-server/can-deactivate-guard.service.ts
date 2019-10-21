import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

// using an own interface makes the authGuard service generic.
// if we could not just let any component implement our interface, we would have to state the component where we want to use CanDeactivate THERE
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(
    component: CanComponentDeactivate, // HERE
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // because we define out CanComponentDeactivate interface and let our component implement it,
    // we can be sure to use canDeactivate here.
    // the method in the component keeps the logic wether a route can be left or not
    return component.canDeactivate();
  }
}
