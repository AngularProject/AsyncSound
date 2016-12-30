import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {
    private isUserAdmin: boolean;
    private isUserAdminSubject: Subject<boolean>;

    constructor() {
        this.isUserAdminSubject = new Subject<boolean>();
    }

    public getUserAdmin(): Observable<boolean> {
        return this.isUserAdminSubject.asObservable();
    }

    public setUserAdmin(): void {
        this.isUserAdmin = JSON.parse(localStorage.getItem('user')).roles.indexOf('admin') >= 0;
        this.isUserAdminSubject.next(this.isUserAdmin);
    }
}
