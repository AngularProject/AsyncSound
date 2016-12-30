import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './models/User';
import { UserService, LoginService } from '../services';

import { NotificationsService } from '../../node_modules/angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  currentUser: User;
  options: Object;
  isUserLogged: Boolean;

  constructor(private userService: UserService, private loginService: LoginService, private router: Router, private notification: NotificationsService) {
    this.isUserLogged = !!localStorage.getItem('user');
    this.options = { 
      timeOut: 2500, 
      pauseOnHover: true, 
      showProgressBar: false, 
      animate: 'scale', 
      position: ['right', 'top'] 
    };
  }

  ngOnInit() {
    this.userService
        .getUserLogged()
        .subscribe((isLogged: boolean) => this.isUserLogged = isLogged);
  }

  logout() {
    this.loginService.logoutUser();
    this.userService.setUserLogged();
    this.notification.success('Logged out successfully', 'Goodbay :)');
    setTimeout(() => this.router.navigateByUrl('/'),1000);
  }
}
