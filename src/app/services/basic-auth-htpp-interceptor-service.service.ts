import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorServiceService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (sessionStorage.getItem('username') && sessionStorage.getItem('jwtToken')) {
      console.log("inside if "+sessionStorage.getItem('jwtToken'));
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('jwtToken')
        }
      })
    }

    return next.handle(req);

  }

  constructor() { }
}
