import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from './../service/hardcoded-auth.service';
import { BasicAuthService } from './../service/basic-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(
    private router: Router,
    private hardcodedAuthService: HardcodedAuthService,
    private basicAuthService: BasicAuthService
  ) {}

  ngOnInit(): void {}

  handleLogin() {
    console.log(this.username);
    if (this.hardcodedAuthService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else this.invalidLogin = true;
  }

  handleBasicAuthLogin() {
    console.log(this.username, this.password);
    this.basicAuthService
      .executeAuthService(this.username, this.password)
      .subscribe(
        (data) => {
          console.log(data);
          this.invalidLogin = false;
          this.router.navigate(['welcome', this.username]);
        },
        (error) => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }
}
