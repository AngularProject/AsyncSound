import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './models/User';
import { UserService, LoginService, AdminService } from '../services';

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
  isUserAdmin: Boolean;

  constructor(
      private userService: UserService,
      private loginService: LoginService,
      private router: Router,
      private notification: NotificationsService,
      private adminService: AdminService) {
    this.isUserLogged = !!localStorage.getItem('user');
    this.options = {
      timeOut: 2500,
      pauseOnHover: true,
      showProgressBar: false,
      animate: 'scale',
      position: ['right', 'top']
    };

    let currentUser = JSON.parse(localStorage.getItem('user'));
    console.log(currentUser);
    if (!!currentUser) {
    console.log(currentUser.roles);
      
        if (currentUser.roles.indexOf('admin') >= 0){
          this.isUserAdmin = true;
        }
    }
  }

  ngOnInit() {
    this.userService
        .getUserLogged()
        .subscribe((isLogged: boolean) => this.isUserLogged = isLogged);

    this.adminService
        .getUserAdmin()
        .subscribe((isAdmin: boolean) => this.isUserAdmin = isAdmin);
  }

  logout() {
    this.loginService.logoutUser();
    this.userService.setUserLogged();
    this.notification.success('Logged out successfully', 'Goodbye :)');
    setTimeout(() => this.router.navigateByUrl('/'), 1000);
  }
}
