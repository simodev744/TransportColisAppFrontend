import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import {AuthService} from './auth-service';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const requiredRole = route.data['role'];
    console.log(requiredRole)
    console.log(this.authService.hasRole(requiredRole))
    if (this.authService.hasRole(requiredRole)) {
      return true;
    }

    this.router.navigate(['/dashboard']);
    return false;
  }
}
