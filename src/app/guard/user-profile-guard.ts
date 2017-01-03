import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';

@Injectable()
export class UserProfileGuard implements CanActivate {
    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    }

    canActivate() {
        let currentUser = JSON.parse(localStorage.getItem('user'));
          this.activatedRoute.params
                .map(params => params['username'])
                .subscribe((username) => {
                    if (currentUser.username === username) {
                        return true;
                    }
                });
        this.router.navigate(['/home']);
        return false;
    }
}
