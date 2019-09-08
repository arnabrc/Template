import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  constructor(private router: Router) { }

  // sendLoginCookie(email: string, password: string, expireDays: number, path: string = '') {
  sendLoginCookie(email: string, password: string, expireDays: number) {
    const cookieVariable1 = email;
    const cookieVariable2 = window.btoa(password);
    // const path = window.location.pathname;
    const d: Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    // const cpath: string = path ? `; path=${path}` : '';
    if ( typeof cookieVariable1 === 'string' && typeof cookieVariable2 === 'string' ) {
      console.log('sendLoginCookie');
      /*document.cookie = `email = ${cookieVariable1}; ${expires}${cpath}`;
      document.cookie = `password = ${cookieVariable2}; ${expires}${cpath}`;*/
      document.cookie = `email = ${cookieVariable1}; ${expires}`;
      document.cookie = `password = ${cookieVariable2}; ${expires}`;
      alert (document.cookie);
    }
  }

  deleteLoginCookie() {
    console.log('deleteLoginCookie');
    this.sendLoginCookie('', '', -1);
  }

  getLoginCookie(name: string) {
    const ca: Array<string> = document.cookie.split(';');
    const caLen: number = ca.length;
    const cookieName = name;
    let c: string;

    for (let i = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '');
        if (c.indexOf(cookieName) === 0 || c.indexOf(cookieName) === 24) {
          console.log('getLoginCookie');
          console.log(cookieName, cookieName.length, c.length);
          return c.substring(cookieName.length, c.length);
      }
    }
  }

  /*deleteCookie(name: string) {
    console.log('Cookie: ' + name);
    this.sendLoginCookie(name, '', -1);
  }*/

  /*getLoginCookie() {
    console.log('getLoginCookie');
    const ca: Array<string> = document.cookie.split(';');
    const caLen: number = ca.length;
    const cookieName1 = `email=`;
    const cookieName2 = `password=`;
    let c: string;

    for (let i = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '');
        if (c.indexOf(cookieName1) === 0) {
          console.log(cookieName1, cookieName1.length, c.length);
          return c.substring(cookieName1.length, c.length);
      }
    }
    for (let i = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName2) === 22) {
        console.log(cookieName2, cookieName2.length, c.length);
        return c.substring(cookieName2.length, c.length);
      }
    }
  }*/

  /*isLoginLoggedIn() {
    console.log('LogInUser');
    // return this.getLoginToken() !== null;
    return this.getLoginToken();
  }

  logout() {
    sessionStorage.removeItem('LogInUser');
    this.router.navigate(['/login']);
  }*/

}

  /*private isConsented = false;

    constructor() {
        this.isConsented = this.getCookie(COOKIE_CONSENT) === '1';
    }

    private getCookie(name: string) {
        const ca: Array<string> = document.cookie.split(';');
        const caLen: number = ca.length;
        const cookieName = `${name}=`;
        let c: string;

        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    }

    private deleteCookie(name) {
        this.setCookie(name, '', -1);
    }

    private setCookie(name: string, value: string, expireDays: number, path: string = '') {
        const d: Date = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        const expires = `expires=${d.toUTCString()}`;
        const cpath: string = path ? `; path=${path}` : '';
        document.cookie = `${name}=${value}; ${expires}${cpath}`;
    }

    private consent(isConsent: boolean, e: any) {
        if (!isConsent) {
            return this.isConsented;
        } else if (isConsent) {
            this.setCookie(COOKIE_CONSENT, '1', COOKIE_CONSENT_EXPIRE_DAYS);
            this.isConsented = true;
            e.preventDefault();
        }
    }
}*/
