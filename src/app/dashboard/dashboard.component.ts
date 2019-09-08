import { Component, OnInit } from '@angular/core';
import { CookieService } from '../services/cookie.service';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cookies = ['email', 'password'];

  constructor(private auth: AuthService) {
    for ( const i of this.cookies) {
      console.log(this.auth.getCookie(i));
    }
}

  ngOnInit() { }

  myFunction() {
    this.auth.deleteAllCookie();
  }

  logout() {
    this.auth.deleteToken();
  }

}
