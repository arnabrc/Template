import {PasswordValidator} from '../validators/password-validator';
import {ValidateEmailNotTaken} from '../validators/validate-email-not-taken';
import {LoaderService} from '../services/loader.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailService } from '../services/email.service';
import { LoaderInterceptorService } from '../services/loader-interceptor.service';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  profileForm: FormGroup;
  submitted = false;
  sucReg = false;
  Questions = [
    'Security Question',
    'What is the name of your first school?',
    // tslint:disable-next-line:quotemark
    "What is your mother's maiden name?",
    'Who is your favourite sportsman?',
    'Where did you first meet your girl?',
    'What is your dream tourist location?'
  ];

  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    // insert logic to check if there are pending changes here;
    // returning true will navigate without confirmation
    // returning false will show a confirm dialog before navigating away
    if (!this.profileForm.dirty || !this.profileForm.touched || this.profileForm.valid) {
      return true;
    } else {
      return false;
    }
  }

  constructor(public router: Router, public route: ActivatedRoute, private fb: FormBuilder, private emailService: EmailService,
              private load: LoaderService, private loader: LoaderInterceptorService,
              private auth: AuthService) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
      ValidateEmailNotTaken.createValidator(this.emailService)],
      passwords: this.fb.group({
        password1: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Za-z0-9]{5,12}$')])],
        password2: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Za-z0-9]{5,12}$')])]
      }, {
        // validator: passwordMatch('password1', 'password2')
        validator: PasswordValidator.passwordMatch
      }),
      questions: this.fb.group({
        question: ['', Validators.compose([Validators.required])]
      }),
      answer: ['', Validators.compose([Validators.required])],
      checkbox: ['', Validators.compose([Validators.required])],
      aliases: this.fb.array([
        this.fb.control('')
      ])
    });
  }

  get email() { return this.profileForm.get('email'); }
  get password1() { return this.profileForm.get('password1'); }
  get password2() { return this.profileForm.get('password2'); }
  get question() { return this.profileForm.get('question'); }
  get answer() { return this.profileForm.get('answer'); }
  get checkbox() { return this.profileForm.get('checkbox'); }

  onSubmit() {
    this.submitted = true;
    // this.isLoggedIn = true;
    // const isLoggedIn = 'true';
    // this.router.navigate(['/dashboard']);
    if (this.profileForm.valid) {
      // this.auth.setToken(this.profileForm.value.email);
      this.router.navigate(['/login']);
      /*this.auth.setToken(this.profileForm.value.email).subscribe(data => {
        console.log(data);
        this.router.navigate(['/login']);
      }, (err) => {
        console.log('Error Occured');
      });*/
      // localStorage.setItem('isLoggedIn', 'true');
      // this.router.navigate(['/login']);
      // this.sucReg = true;
    }
    // this.router.navigate(['/dashboard']);
    console.warn(this.profileForm.value);
  }

}
