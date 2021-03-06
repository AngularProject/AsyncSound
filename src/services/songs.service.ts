import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';


import { HttpOptionsService } from './http.options.service';

const SONG_URL = 'https://async-sound-server.herokuapp.com/api/songs/';
const SONG_CATEGORY_URL = 'https://async-sound-server.herokuapp.com/api/songs/category/';
const SONG_SEARCH_URL = 'https://async-sound-server.herokuapp.com/api/songs/search/';

@Injectable()
export class SongService {

     constructor(
         private http: Http,
         private httpOptionsService: HttpOptionsService) {
    }

    public getAllSongs(): Observable<any> {
        let options: RequestOptions = this.httpOptionsService.getRequestOptions(false);

        return this.http
            .get(SONG_URL, options)
            .map((res: Response) => res.json());
    }

    public getSongByTitle(title): Observable<any> {
        let url = SONG_SEARCH_URL + title;
        let options: RequestOptions = this.httpOptionsService.getRequestOptions(false);

        return this.http
            .get(url, options)
            .map((res: Response) => res.json());
    }
}
