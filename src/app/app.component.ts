import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './models/User';
import { UserService, LoginService } from '../services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  currentUser: User;

  isUserLogged: Boolean;

  constructor(private userService: UserService, private loginService: LoginService, private router: Router) {
     this.isUserLogged = !!localStorage.getItem('user');
  }

  ngOnInit() {
    this.userService
        .getUserLogged()
        .subscribe((isLogged: boolean) => this.isUserLogged = isLogged);
  }

  logout() {
    this.loginService.logoutUser();
    this.router.navigateByUrl('/');
    this.userService.setUserLogged();
    alert('Logged out successfully');
  }
}
