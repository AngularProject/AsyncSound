import * as console from 'console';
import { Login } from '../models/Login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationsService } from '../../../node_modules/angular2-notifications';

import { UserService, LoginService } from '../../services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginPageComponent implements OnInit {
  model: Login;
  options: Object;

  constructor(
  private userService: UserService,
  private loginService: LoginService,
  private notification: NotificationsService,
  private router: Router) {
    this.model = new Login();
  }

  ngOnInit() {
      this.options = { 
      timeOut: 2500, 
      pauseOnHover: true, 
      showProgressBar: false, 
      animate: 'scale', 
      position: ['right', 'top'] 
    };
  }

  public login(): void {
    this.loginService
      .loginUser(this.model)
      .subscribe((response: any) => {
          if(response.error) {
            this.notification.error('Login failed!', response.message);
          } else {
            localStorage.setItem('user', JSON.stringify(response));
            // localStorage.setItem('playlist', JSON.stringify(response))
            this.userService.setUserLogged();
            this.notification.success('Login successful!', 'Welcome');
            setTimeout(() => this.router.navigateByUrl('/home'), 1500);
          }
      }, () => this.notification.error('Login failed!', 'Please try again.'));
  }
}
