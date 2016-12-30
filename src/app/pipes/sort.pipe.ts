import { Pipe, PipeTransform } from '@angular/core';

import { Playlist } from '../models/Playlist';

@Pipe({ name: 'sort-playlists' })
export class SortPlaylistsPipe implements PipeTransform {
	transform(playlists: Playlist[], options: string[]): Playlist[] {
		let sortBy: string = options[0] || 'title';
		let orderBy: string = options[1] || 'ascending';

		if(!playlists || playlists.length === 0) {
			return undefined;
		}

		let sortedPlaylists = playlists.sort((first: any, second: any): number => {
			let comparison = first[sortBy].localeCompare(second[sortBy]);
			if(orderBy === 'descending') {
				return -comparison;
			}

			return comparison;
		});

		return sortedPlaylists;
	}
}