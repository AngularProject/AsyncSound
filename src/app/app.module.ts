import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SimpleNotificationsModule } from '../../node_modules/angular2-notifications';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LoginPageComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';

import { HttpOptionsService, RegisterService, LoginService, UserService } from '../services';

import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ProfilePageComponent,
    LoginPageComponent,
    RegisterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SimpleNotificationsModule,
    AppRoutingModule
  ],
  providers: [ HttpOptionsService, RegisterService, LoginService, UserService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
