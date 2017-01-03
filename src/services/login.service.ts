import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';


import { HttpOptionsService } from './http.options.service';

const LOGIN_URL = process.env.LOGIN_URL || 'http://localhost:3000/auth/login';
const LOGOUT_URL = process.env.LOGOUT_URL || 'http://localhost:3000/auth/logout';
const EDIT_URL = process.env.EDIT_URL || 'http://localhost:3000/auth/edit';

@Injectable()
export class LoginService {

    constructor(private http: Http, private httpOptionService: HttpOptionsService) {
    }

    public isUserLogged(): boolean {
        let userData: string = localStorage.getItem('user');

        if (!userData) {
            return false;
        }

        return true;
    }

    public loginUser(data: Object): Observable<any> {
        let body: string = JSON.stringify(data);
        let options: RequestOptions = this.httpOptionService.getRequestOptions(true);

        return this.http
            .post(LOGIN_URL, body, options)
            .map((res: Response) => res.json());
    }

    public editUserProfile(data: Object): Observable<any> {
        let body: string = JSON.stringify(data);
        let options: RequestOptions = this.httpOptionService.getRequestOptions(true);

        return this.http
            .post(EDIT_URL, body, options)
            .map((res: Response) => res.json());
    }

    public logoutUser(): void {
        localStorage.clear();
    }
}
