import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginPageComponent implements OnInit {
  model: any = {};

  constructor(private userService: UserService,
  private router: Router) { }

  ngOnInit() {
  }

  onSumbit() {
      // TODO: Make with Observable/Promise
      this.userService.loginUser(this.model.username, this.model.password);
      alert('Logged successfully');
      this.router.navigate(['/profile']);
  }

}
