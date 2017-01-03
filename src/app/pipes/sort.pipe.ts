import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sort' })
export class SortPlaylistsPipe implements PipeTransform {
	transform(items: any[], sortBy: string): any[] {
		sortBy = sortBy || 'title';

		if(!items || items.length === 0) {
			return undefined;
		}

		return items.sort((first: any, second: any): number => {
			return first[sortBy].localeCompare(second[sortBy]);
		});
	}
}