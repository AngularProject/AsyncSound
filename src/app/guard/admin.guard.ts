import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate() {
        let currentUser = JSON.parse(localStorage.getItem('user'));
        console.log(currentUser);

        if (!!currentUser) {
            if (currentUser.roles.indexOf('admin') >= 0) {
                return true;

            }
        }
        alert('not authorized');
        this.router.navigate(['/home']);
        return false;
    }
}
