import { Component, OnInit } from '@angular/core';

import { User } from './models/User';
import { UserService } from '../services/user.service';
import { LoginService} from '../services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  currentUser: User;

  isUserLogged: Boolean;

  constructor(private userService: UserService, private loginService: LoginService) {
     //this.currentUser = JSON.parse(localStorage.getItem('loggedUser'));
     this.isUserLogged = !!localStorage.getItem('user');
  }

  ngOnInit() {
    this.loginService
        .IsUserLoggedSubject()
        .subscribe((isLogged: boolean) => this.isUserLogged = isLogged);
  }

  logout() {
    // Make call to UserService
    this.userService.logoutUser();
      alert('Logged out successfully');
  }
}
