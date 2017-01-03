import { User } from '../app/models/User';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {
    users: User[] = [];

    private isUserLogged: boolean;
    private isUserLoggedSubject: Subject<boolean>;

    constructor() {
        this.isUserLoggedSubject = new Subject<boolean>();
    }


    public getUserLogged(): Observable<boolean> {
        return this.isUserLoggedSubject.asObservable();
    }

    public setUserLogged(): void {
        this.isUserLogged = !!localStorage.getItem('user');
        this.isUserLoggedSubject.next(this.isUserLogged);
    }
}
