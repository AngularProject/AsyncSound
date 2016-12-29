import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpOptionsService } from './http.options.service';

const REGISTER_URL: string = 'http://localhost:3000/auth/register';

@Injectable()
export class RegisterService {

    constructor(private http: Http, private httpOptionsService: HttpOptionsService) {
    }

    public registerUser(data: Object): Observable<any> {
        let body: string = JSON.stringify(data);
        let options: RequestOptions = this.httpOptionsService.getRequestOptions();

        return this.http
            .post(REGISTER_URL, body, options)
            .map((res: Response) => res.json());
    }
}