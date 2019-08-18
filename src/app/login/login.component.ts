import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profileFormLogin: FormGroup;
  submitted = false;
  users: any;
  hasError = false;

  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    // insert logic to check if there are pending changes here;
    // returning true will navigate without confirmation
    // returning false will show a confirm dialog before navigating away
    if (!this.profileFormLogin.dirty || !this.profileFormLogin.touched || this.profileFormLogin.valid) {
      return true;
    } else {
      return false;
    }
  }


  constructor(public router: Router, public route: ActivatedRoute, private fb: FormBuilder,
              private auth: AuthService, private http: HttpClient) { }

  ngOnInit() {
    this.profileFormLogin = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')])],
      password: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Za-z0-9]{5,12}$')])],
      aliases: this.fb.array([
        this.fb.control('')
      ])
    });
    this.getContentJSON();
  }

  get email() { return this.profileFormLogin.get('email'); }
  get password() { return this.profileFormLogin.get('password'); }

  onSubmit() {
    this.submitted = true;

    // tslint:disable-next-line:forin
    for ( const i in this.users ) {
      const em1 = this.users[i].email;
      const pw1 = this.users[i].password;
      if ( em1 === this.profileFormLogin.value.email && pw1 === this.profileFormLogin.value.password ) {
        console.log('success');
        if (this.profileFormLogin.valid) {
          this.auth.setToken(this.profileFormLogin.value.email);
          // localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/dashboard']);
        }
      } else {
        console.log('failure');
        this.hasError = true;
      }
    }
    console.warn(this.profileFormLogin.value);
  }

  getContentJSON(): any {
    this.http.get('./assets/data/NameEmailPassword.json').subscribe(
      data => {
        this.users = data as string;
        console.log(JSON.stringify(this.users));
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
