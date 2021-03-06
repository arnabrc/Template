import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { SessionService } from './session.service';
import { CookieService } from './cookie.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private session: SessionService, private cookie: CookieService) { }

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

  setCookie(email: string, password: string) {
    const expires = 365;
    // const path = window.location.pathname;
    this.cookie.sendLoginCookie(email, password, expires);
  }

  getCookie(name: string) {
    return this.cookie.getLoginCookie(name);
  }

  /*deleteSpecificCookie(cookieName: string) {
    this.cookie.deleteCookie(cookieName);
  }*/

  deleteAllCookie() {
    this.cookie.deleteLoginCookie();
  }

}
