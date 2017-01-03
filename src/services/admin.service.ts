import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { HttpOptionsService } from './http.options.service';

// const SET_ROLE_URL = ;
const GET_ADMINS_URL  = process.env.GET_ADMINS_URL || 'http://localhost:3000/all-admins';
const REMOVE_ADMIN_URL = process.env.REMOVE_ADMIN_URL || 'http://localhost:3000/remove-role';
const SET_ROLE_URL = process.env.SET_ROLE_URL || 'http://localhost:3000/user-role';

@Injectable()
export class AdminService {
    private isUserAdmin: boolean;
    private isUserAdminSubject: Subject<boolean>;

     constructor(private http: Http, private httpOptionsService: HttpOptionsService) {
        this.isUserAdminSubject = new Subject<boolean>();
    }

    public getUserAdmin(): Observable<boolean> {
        return this.isUserAdminSubject.asObservable();
    }

    public setUserAdmin(): void {
        let currentUser = localStorage.getItem('user');

        if (!!currentUser) {
            let user = JSON.parse(localStorage.getItem('user'));

            if (user.roles.includes('admin')) {
                this.isUserAdmin = true;
            } else {
                this.isUserAdmin = false;
            }

            this.isUserAdminSubject.next(this.isUserAdmin);
        } else {
            this.isUserAdmin = false;
            this.isUserAdminSubject.next(this.isUserAdmin);
        }
    }

    public setUserAsAdmin(data: Object): Observable<any> {
        let body: string = JSON.stringify(data);
        let options: RequestOptions = this.httpOptionsService.getRequestOptions(true);

        return this.http
            .post(SET_ROLE_URL, body, options)
            .map((res: Response) => res.json());
    }

    public getAllAdmins(): Observable<any> {
        return this.http
            .get(GET_ADMINS_URL)
            .map((res: Response) => res.json());
    }

     public deleteAdmin(data): Observable<any> {
         let body: string = JSON.stringify(data);
        let options: RequestOptions = this.httpOptionsService.getRequestOptions(true);

        return this.http
            .post(REMOVE_ADMIN_URL, body, options)
            .map((res: Response) => res.json());
    }
}
