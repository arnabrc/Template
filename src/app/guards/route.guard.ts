import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {url} from '@angular-devkit/schematics';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
    if (this.authService.checkToken()) {
      console.log('RouteGuard');
      return true;
      // this.router.navigate(['/dashboard']);
    } else {
      // return this.router.parseUrl('/registration');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
