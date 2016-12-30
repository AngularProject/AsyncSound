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

  constructor(
  private userService: UserService,
  private loginService: LoginService,
  private notification: NotificationsService,
  private router: Router) {
    this.model = new Login();
  }

  ngOnInit() {
  }

  public login(): void {
    this.loginService
      .loginUser(this.model)
      .subscribe((response: any) => {
          let result: any = (typeof (response) === 'string') ? JSON.parse(response): response;

          if(result.error) {
            this.notification.error('Login failed!', 'Please try again.');
          } else {
            localStorage.setItem('user', JSON.stringify(result));
            this.userService.setUserLogged();
            this.notification.success('Login successful!', 'Hi');
            this.router.navigateByUrl('/home');
          }
      },() => this.notification.error('Login failed!', 'Please try again.'));
  }
}
