import { Component, OnInit } from '@angular/core';

import { User } from '../models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   user: User;

   username: string;
   firstName: string;
   lastName: string;
   password: string;

  constructor() { }

  ngOnInit() {
  }

  onSumbit() {
    alert('User ' + this.username + ' fakely registered');
  }
}
