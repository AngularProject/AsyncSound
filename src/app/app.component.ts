import { Component, OnInit } from '@angular/core';

import { User } from './models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  currentUser: User;
  title = 'AsyncSound welcomes you!';

  constructor(private userService: UserService) {
     this.currentUser = JSON.parse(localStorage.getItem('loggedUser'));
  }

  ngOnInit() {

  }

  logout() {
    // Make call to UserService
    this.userService.logoutUser();
      alert('Logged out successfully');
  }
}
