import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  onSumbit() {
      // TODO: Make with Observable/Promise
      this.userService.createUser(this.model);
      alert('Registered');
      this.router.navigate(['/login']);
  }
}
