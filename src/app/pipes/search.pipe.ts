import { Pipe, PipeTransform } from '@angular/core';

import { Playlist } from '../models/Playlist';

@Pipe({ name: 'search' })
export class SearchPlaylistPipe implements PipeTransform {
	transform(playlists: Playlist[], searchPattern: string): Playlist[] {
        searchPattern = searchPattern || '';
        if (searchPattern === '') {
            return playlists;
        }

        return playlists.filter(obj => obj.title.toLowerCase().includes(searchPattern.toLowerCase()));
    }
}