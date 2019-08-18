import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StopRouteGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  canActivate() {
      if (!this.authService.checkToken()) {
        return true;
      } else {
        this.router.navigate(['/dashboard']);
        return false;
      }
  }
}
