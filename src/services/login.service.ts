import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';


import { HttpOptionsService } from './http.options.service';

const LOGIN_URL: string = 'http://localhost:3000/auth/login';
const LOGOUT_URL: string = 'http://localhost:3000/auth/logout';

@Injectable()
export class LoginService {
    isUserLogIn: Subject<boolean>;
    constructor(private http: Http, private httpOptionService: HttpOptionsService) {
        this.isUserLogIn = new Subject<boolean>();
    }

    // TO DO ===> VERIFYING!
    public isUserLogged() : boolean {
        let userData: string = localStorage.getItem('user');

        if(!userData) {
            return false;
        }
        
        return true;
    }

    public IsUserLoggedSubject(): Observable<boolean> {
        return this.isUserLogIn.asObservable();
    }

    public loginUser(data: Object): Observable<any> {
        let body: string = JSON.stringify(data);
        let options: RequestOptions = this.httpOptionService.getRequestOptions();

        return this.http
            .post(LOGIN_URL, body, options)
            .map((res: Response) => res.json());
    }

    public logoutUser(): void {
        localStorage.clear();
    }
}