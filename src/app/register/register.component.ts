import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationsService } from '../../../node_modules/angular2-notifications';
import { UserService } from '../../services/user.service';

import { User } from '../models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  options: Object;

  constructor(
    private userService: UserService,
    private router: Router,
    private _notification: NotificationsService) { }

  ngOnInit() {
      this.options = { 
      timeOut: 2500, 
      pauseOnHover: true, 
      showProgressBar: false, 
      animate: 'scale', 
      position: ['right', 'top'] 
    };
  }

  onSumbit() {
      // TODO: Make with Observable/Promise
      this.userService.createUser(this.model);
            // .subscribe((res: any) => {
            // this._notification.success('', res.body.message);
            // setTimeout(() => this._router.navigateByUrl('/login'), 2500);
            // },
            // (err: any) => {
            //   let notificationMsg = JSON.parse(err._body).message;
            //   this._notification.error('', notificationMsg);})
      alert('Registered');
      this.router.navigate(['/login']);
  }
}
