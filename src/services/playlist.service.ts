import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { HttpOptionsService } from './http.options.service';

import { Playlist } from '../app/models/Playlist';
import { Comment } from '../app/models/Comment';

const PLAYLIST_URL = 'http://localhost:3000/api/playlists/';
const GET_USER_PLAYLIST_URL = 'http://localhost:3000/user-playlists/';
const CREATE_PLAYLIST_URL = 'http://localhost:3000/playlist/add';

@Injectable()
export class PlaylistService {
	playlists: Playlist[] = [];

	constructor(private http: Http, private httpOptionsService: HttpOptionsService) {
    }

    public getUserPlaylists(username): Observable<any> {

		let url = PLAYLIST_URL + username;
        let options: RequestOptions = this.httpOptionsService.getRequestOptions(false);

        return this.http
            .get(url, options)
            .map((res: Response) => res.json());
    }	

	public addSongInPlaylist(data: Object): Observable<any> {

        let body: string = JSON.stringify(data);
        let options: RequestOptions = this.httpOptionsService.getRequestOptions(true);

        return this.http
            .post(PLAYLIST_URL, body, options)
            .map((res: Response) => res.json());
    }
	getAllPlaylists() {
		return this.playlists;
	}

	getPlaylistByTitle(title: string) {
		return this.playlists.find(x => x.title === title);
	}

	createPlaylist(playlist: Playlist) {
		let body: string = JSON.stringify(playlist);
		let options: RequestOptions = this.httpOptionsService.getRequestOptions(true);

		return this.http
		.post(CREATE_PLAYLIST_URL, body, options)
		.map((res: Response) => res.json());
     }

     getAllPlaylistsOfUser(userId: string) {

		 let body: string = JSON.stringify(userId);
		 
		 return this.http
			.get(GET_USER_PLAYLIST_URL + userId)
			.map((res: Response) => res.json());
	 }
}