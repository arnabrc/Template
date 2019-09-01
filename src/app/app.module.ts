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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorComponent } from './error/error.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './services/loader.service';
import { CookieService } from './services/cookie.service';
import { Profile1Component } from './profile1/profile1.component';
import { Profile2Component } from './profile2/profile2.component';
import { Profile3Component } from './profile3/profile3.component';
import { Profile4Component } from './profile4/profile4.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AppService } from './services/app.service';
import { DataResolverService } from './resolvers/data-resolver.service';
import { EditComponent } from './edit/edit.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from './footer/footer.component';
import { FooterOnlyComponent } from './footer-only/footer-only.component';
import { OutputGraphComponent } from './output-graph/output-graph.component';
import { HoverDirective } from './directives/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    ForgotComponent,
    ErrorComponent,
    LoaderComponent,
    Profile1Component,
    Profile2Component,
    Profile3Component,
    Profile4Component,
    EditProfileComponent,
    EditComponent,
    HeaderComponent,
    MainLayoutComponent,
    FooterComponent,
    FooterOnlyComponent,
    OutputGraphComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    /*RouterModule.forRoot([
      { path: 'login', component: LoginComponent, pathMatch: 'full',
        canDeactivate: [CanDeactivateGuard], canActivate: [StopRouteGuard] },
      { path: 'forgot', component: ForgotComponent, pathMatch: 'full' },
      { path: 'registration', component: RegistrationComponent, pathMatch: 'full',
        canDeactivate: [CanDeactivateGuard], canActivate: [StopRouteGuard] },
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', canActivate: [RouteGuard] },
      { path: 'profile1', component: Profile1Component, pathMatch: 'full'},
      { path: 'profile2', component: Profile2Component, pathMatch: 'full'},
      { path: 'profile3', component: Profile3Component, pathMatch: 'full'},
      { path: 'profile4', component: Profile4Component, pathMatch: 'full'},
      { path: 'edit-profile', component: EditProfileComponent, pathMatch: 'full', resolve: {data: DataResolverService} },
      { path: 'edit', component: EditComponent, pathMatch: 'full'},
      { path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [StopRouteGuard] },
      { path: '*', component: LoginComponent, canActivate: [StopRouteGuard] },
      { path: '**', component: LoginComponent, canActivate: [StopRouteGuard] }
    ])*/
    RouterModule.forChild([
      {
        path: 'login',
        component: FooterOnlyComponent,
        children: [
          {
            path: '',
            component: LoginComponent,
            canActivate: [StopRouteGuard],
            canDeactivate: [CanDeactivateGuard]
          }
        ],
        pathMatch: 'full'
      },
      {
        path: 'registration',
        component: FooterOnlyComponent,
        children: [
          {
            path: '',
            component: RegistrationComponent,
            canActivate: [StopRouteGuard],
            canDeactivate: [CanDeactivateGuard]
          }
        ],
        pathMatch: 'full'
      },
      {
        path: 'forgot',
        component: FooterOnlyComponent,
        children: [
          {
            path: '',
            component: ForgotComponent
          }
        ],
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: MainLayoutComponent,
        children: [
          {
            path: '',
            component: DashboardComponent,
            canActivate: [RouteGuard]
          }
        ],
        pathMatch: 'full'
      },
      {
        path: 'profile1',
        component: MainLayoutComponent,
        children: [
          {
            path: '',
            component: Profile1Component,
            canActivate: [RouteGuard]
          }
        ],
        pathMatch: 'full'
      },
      {
        path: 'profile2',
        component: MainLayoutComponent,
        children: [
          {
            path: '',
            component: Profile2Component,
            canActivate: [RouteGuard]
          }
        ],
        pathMatch: 'full'
      },
      {
        path: 'profile3',
        component: MainLayoutComponent,
        children: [
          {
            path: '',
            component: Profile3Component,
            canActivate: [RouteGuard]
          }
        ],
        pathMatch: 'full'
      },
      {
        path: 'profile4',
        component: MainLayoutComponent,
        children: [
          {
            path: '',
            component: Profile4Component,
            canActivate: [RouteGuard]
          }
        ],
        pathMatch: 'full'
      },
      {
        path: 'edit-profile',
        component: MainLayoutComponent,
        children: [
          {
            path: '',
            component: EditProfileComponent,
            resolve: {data: DataResolverService},
            canActivate: [RouteGuard]
          }
        ],
        pathMatch: 'full'
      },
      {
        path: 'edit',
        component: MainLayoutComponent,
        children: [
          {
            path: '',
            component: EditComponent,
            canActivate: [RouteGuard]
          }
        ],
        pathMatch: 'full'
      },
      {
        path: 'output-graph',
        component: MainLayoutComponent,
        children: [
          {
            path: '',
            component: OutputGraphComponent,
            canActivate: [RouteGuard]
          }
        ],
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: '*',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
      }
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
    LoaderService,
    CookieService,
    AppService,
    DataResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
