import { Component, OnInit } from '@angular/core';

import { User } from '../models/User';

@Component({
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
 currentUser: User;

  constructor() { 
    this.currentUser = JSON.parse(localStorage.getItem('loggedUser'));
    console.log(this.currentUser);
  }

  ngOnInit() {
  }

}
