import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpOptionsService } from './http.options.service';

const REGISTER_URL =  'https://async-sound-server.herokuapp.com/auth/register';

@Injectable()
export class RegisterService {

    constructor(private http: Http, private httpOptionsService: HttpOptionsService) {
    }

    public registerUser(data: Object): Observable<any> {
        let body: string = JSON.stringify(data);
        let options: RequestOptions = this.httpOptionsService.getRequestOptions(true);

        return this.http
            .post(REGISTER_URL, body, options)
            .map((res: Response) => res.json());
    }
}
