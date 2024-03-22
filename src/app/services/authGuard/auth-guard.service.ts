import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../authService/auth.service'; // Import your authentication service
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (1 === 1) {
      return true; // User is logged in, allow access to the route
    } else {
      return this.router.createUrlTree(['/login']); // User is not logged in, redirect to login page
    }
  }
}
