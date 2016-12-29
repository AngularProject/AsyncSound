import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationsService } from '../../../node_modules/angular2-notifications';
import { RegisterService, UserService } from '../../services';

import { User } from '../models/User';
import { Register } from '../models/Register';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: Register;
  options: Object;

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private notification: NotificationsService) { 
        this.model = new Register();
    }

  ngOnInit() {
      this.options = { 
      timeOut: 2500, 
      pauseOnHover: true, 
      showProgressBar: false, 
      animate: 'scale', 
      position: ['right', 'top'] 
    };
  }

  register() {
      this.registerService
          .registerUser(this.model)
          .subscribe(response => {
              if(response.error) {
                  this.notification.error("Registration failed", "User exist");
              } else {
                  this.notification.success("Registration succesful", "You are logged")
                  setTimeout(() => this.router.navigateByUrl('/login'), 500);
              }
          });
  }
}
