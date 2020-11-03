import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from './../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  name = '';
  serviceMessage = '';

  constructor(
    private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.welcomeDataService
      .executeHelloWorldPathVariableBeanService(this.name)
      .subscribe(
        (response) => this.handleSuccessResponse(response),
        (error) => this.handleErrorResponse(error)
      );
  }

  handleSuccessResponse(response) {
    this.serviceMessage = response.message;
  }
  handleErrorResponse(error) {
    this.serviceMessage = 'error ' + error.message;
  }
}
