import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) { }

  sendLoginToken(token: string) {
    // localStorage.setItem('LoggedInUser', token);
    const sessionVariable = token;
    console.log('sendLoginToken');
    if ( typeof sessionVariable === 'string' ) {
      sessionStorage.setItem('LogInUser', token);
    }
  }
  getLoginToken() {
    // return localStorage.getItem('LoggedInUser');
    console.log('getLoginToken');
    return sessionStorage.getItem('LogInUser');
  }
  isLoginLoggedIn() {
    console.log('LogInUser');
    // return this.getLoginToken() !== null;
    return this.getLoginToken();
  }
  logout() {
    sessionStorage.removeItem('LogInUser');
    this.router.navigate(['/login']);
  }

}
