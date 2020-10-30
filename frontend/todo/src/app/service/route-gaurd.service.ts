import { Injectable } from '@angular/core';
import { HardcodedAuthService } from './hardcoded-auth.service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteGaurdService implements CanActivate {
  constructor(
    private hardcodedAuthService: HardcodedAuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthService.isUserLoggedIn()) return true;
    this.router.navigate(['login']);

    return false;
  }
}
