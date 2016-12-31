import { Pipe, PipeTransform } from '@angular/core';

import { Playlist } from '../models/Playlist';

@Pipe({ name: 'sort' })
export class SortPlaylistsPipe implements PipeTransform {
	transform(playlists: Playlist[], sortBy: string): Playlist[] {
		sortBy = sortBy || 'title';

		if(!playlists || playlists.length === 0) {
			return undefined;
		}

		return playlists.sort((first: any, second: any): number => {
			return first[sortBy].localeCompare(second[sortBy]);
		});
	}
}