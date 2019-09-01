import { Component, OnInit } from '@angular/core';
import { CookieService } from '../services/cookie.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private cookie: CookieService, private auth: AuthService) {
      // cookie.getLoginCookie();
      // auth.deleteSpecificCookie('email');
   }

  ngOnInit() {
  }

  myFunction() {
    // this.auth.deleteAllCookie();
  }

  logout() {
    this.auth.deleteToken();
  }

}
