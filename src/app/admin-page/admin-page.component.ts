import { Component, OnInit } from '@angular/core';

import { AdminService} from '../../services/admin.service';
import { NotificationsService } from '../../../node_modules/angular2-notifications';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  user: string;

  constructor(private adminService: AdminService, private notification: NotificationsService) { }

  ngOnInit() {
  }

  setRole() {
    console.log(this.user);

    this.adminService.setUserAsAdmin({'username': this.user})
      .subscribe((response: any) => {
          if (response.error) {
              this.notification.error('Login failed!', response.message);
            } else {
              this.notification.success('Successfully added role to user ' + this.user, 'Welcome');
              // setTimeout(() => this.router.navigateByUrl('/home'), 1500);
            }
        }, () => this.notification.error('Login failed!', 'Please try again.'));
  }
}
