import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // the request object itself is immutable
    const modifiedRequest = req.clone({
      // override props of the object here
      headers: req.headers.append('Authkey', 'xyz')
    });

    return next.handle(modifiedRequest); // let the request continue its journey
  }

}
