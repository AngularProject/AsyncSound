import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const GET_PROFILE_INFO_URL: string = 'http://localhost:3000/profile/';
const USER_AVATAR_URL = 'http://localhost:3000/api/avatar/';

@Injectable()
export class ProfileService {
    constructor(private http: Http) {
    }

    getUserProfile(id) {
        let url = GET_PROFILE_INFO_URL + id;
         return this.http
            .get(url)
            .map((res: Response) => res.json());
    }


    getUserAvatar(username: string): string {
        return USER_AVATAR_URL + username;
    }
}
