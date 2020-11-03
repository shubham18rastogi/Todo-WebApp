import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthService } from './../basic-auth.service';

@Injectable({
  providedIn: 'root',
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {
  constructor(private authService: BasicAuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = 'shbhm';
    // let password = 'dummy';
    // let basicAuthHeaderString =
    //   'Basic ' + window.btoa(username + ':' + password);

    let basicAuthHeaderString = this.authService.getAuthenticatedToken();

    if (basicAuthHeaderString) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString,
        },
      });
    }
    return next.handle(request);
  }
}
