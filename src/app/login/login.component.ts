import { Login } from '../models/Login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationsService } from '../../../node_modules/angular2-notifications';

import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginPageComponent implements OnInit {
  model: Login;

  constructor(
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
            this.notification.success('Login successful!', 'Hi');
            this.router.navigateByUrl('/home');
          }
      },() => this.notification.error('Login failed!', 'Please try again.'));
  }

}
