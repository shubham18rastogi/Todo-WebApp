import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from './../../app.constants';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloWorldBeanService() {
    console.log('Bean Service');
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
  }
  executeHelloWorldPathVariableBeanService(pathVariable) {
    console.log(pathVariable);
    // let authString = this.createBasicAuthHeader();
    // let headers = new HttpHeaders({
    //   Authorization: authString,
    // });
    return this.http.get<HelloWorldBean>(
      `${API_URL}/hello-world/path-variable/${pathVariable}`
    );
  }

  /*  createBasicAuthHeader() {
    let username = 'shbhm';
    let password = 'dummy';
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }*/
}
