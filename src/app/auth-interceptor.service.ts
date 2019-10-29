import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // code running right before the request is fired;
    console.log('request is on its way', req);

    // do some side effect like logging
    return next.handle(req); // let the request continue its journey
  }

}
