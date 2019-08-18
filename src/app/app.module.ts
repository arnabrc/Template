import {StopRouteGuard} from './guards/stop-route.guard';
import {EmailService} from './services/email.service';
import {LoaderInterceptorService} from './services/loader-interceptor.service';
import {AuthService} from './services/auth.service';
import {SessionService} from './services/session.service';
import {CanDeactivateGuard} from './guards/can-deactivate.guard';
import {RouteGuard} from './guards/route.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './error/error.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './services/loader.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    ForgotComponent,
    ErrorComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent, pathMatch: 'full',
        canDeactivate: [CanDeactivateGuard], canActivate: [StopRouteGuard] },
      { path: 'forgot', component: ForgotComponent, pathMatch: 'full' },
      { path: 'registration', component: RegistrationComponent, pathMatch: 'full',
        canDeactivate: [CanDeactivateGuard], canActivate: [StopRouteGuard] },
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', canActivate: [RouteGuard] },
      { path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [StopRouteGuard] },
      { path: '*', component: LoginComponent, canActivate: [StopRouteGuard] },
      { path: '**', component: LoginComponent, canActivate: [StopRouteGuard] }
    ])
  ],
  providers: [
    CanDeactivateGuard,
    RouteGuard,
    StopRouteGuard,
    AuthService,
    SessionService,
    EmailService,
    LoaderInterceptorService,
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
