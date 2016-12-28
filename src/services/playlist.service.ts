import { Injectable } from '@angular/core';

import { Playlist } from '../app/models/Playlist';
import { Comment } from '../app/models/Comment';

@Injectable()
export class PlaylistService {
	playlists: Playlist[] = [];

	getAllPlaylists() {
		return this.playlists;
	}

	getPlaylistByTitle(title: string) {
		return this.playlists.find(x => x.title === title);
	}

	createPlaylist(playlist: Playlist) {
		this.playlists.push(playlist);
	}
}