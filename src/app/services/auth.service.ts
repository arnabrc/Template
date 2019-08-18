import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private session: SessionService) { }

  setToken(email: string) {
    // localStorage.setItem('LoggedInUser', token);
    console.log('sendLoginToken');
    this.session.sendLoginToken(email);
  }
  getToken() {
    // return localStorage.getItem('LoggedInUser');
    console.log('getLoginToken');
    return this.session.getLoginToken();
  }
  checkToken() {
    return this.session.isLoginLoggedIn();
  }
  deleteToken() {
    return this.session.logout();
  }

}
