import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const GET_PROFILE_INFO_URL: string = 'http://localhost:3000/profile/:id';

@Injectable()
export class ProfileService {
    constructor(private http: Http) {
    }

    getUserProfile(id) {
        let url = `http://localhost:3000/profile?id=${id}`;
         return this.http
            .get(url)
            .map((res: Response) => res.json());
    }

}
