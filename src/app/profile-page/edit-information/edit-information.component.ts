import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Register } from '../../models/Register';

import { LoginService } from '../../../services/';
import { NotificationsService } from '../../../../node_modules/angular2-notifications';

@Component({
  selector: 'app-edit-information',
  templateUrl: './edit-information.component.html',
  styleUrls: [ './edit-information.component.css' ]
})

export class EditInformationComponent implements OnInit {
   model: Register;

    constructor(private notification: NotificationsService, private loginService: LoginService, private router: Router) {
        this.model = new Register();
    }

    ngOnInit() {
        const user = JSON.parse(localStorage.getItem('user'));
        this.model.username = user.username;
        this.model.firstname = user.firstname;
        this.model.lastname = user.lastname;
        this.model.email = user.email;

    }

    editUserProfile() {
        this.loginService
            .editUserProfile(this.model)
            .subscribe(response => {
                if(response.error) {
                    this.notification.error('Editing failed', response.error);
                } else {
                    this.notification.success('Profile updated', response.firstname);
                    localStorage.removeItem('user');
                    localStorage.setItem('user', JSON.stringify(response));
                    this.model.password = '';

                    let updatedUser = JSON.parse(localStorage.getItem('user'));
                    let url = '/profile/' + updatedUser._id;

                    this.router.navigateByUrl(url);
                }
            }, () => this.notification.error('Editing failed', 'Try again later!'));
    }
}
