import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from './../app.constants';

@Injectable({
  providedIn: 'root',
})
export class BasicAuthService {
  constructor(private http: HttpClient) {}

  executeAuthService(username, password) {
    console.log('Bean Service');

    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);

    console.log(basicAuthHeaderString);
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });

    return this.http
      .get<AuthBean>(`${API_URL}/basicauth`, {
        headers,
      })
      .pipe(
        map((data) => {
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('token', basicAuthHeaderString);
          return data;
        })
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser');
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) return sessionStorage.getItem('token');
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }
}

export class AuthBean {
  constructor(public message: string) {}
}
