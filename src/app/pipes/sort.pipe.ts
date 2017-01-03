import { Pipe, PipeTransform } from '@angular/core';

const SORT_PROPERTY_TITLE = 'title';
const SORT_PROPERTY_CREATOR = 'creator';

@Pipe({ name: 'sort' })
export class SortPlaylistsPipe implements PipeTransform {
	transform(items: any[], sortProperty: string): any[] {
		sortProperty = sortProperty || '';

		if(sortProperty === '') {
			return items.sort((first: any, second: any): number => {
				return second[SORT_PROPERTY_TITLE].localeCompare(first[SORT_PROPERTY_TITLE]);
			});
		} else if(SORT_PROPERTY_TITLE.includes(sortProperty.toLowerCase())) {
        	return items.sort((first: any, second: any): number => {
				return first[SORT_PROPERTY_TITLE].localeCompare(second[SORT_PROPERTY_TITLE]);
			});
        } else if(SORT_PROPERTY_CREATOR.includes(sortProperty.toLowerCase())) {
        	return items.sort((first: any, second: any): number => {
				return first[SORT_PROPERTY_CREATOR].localeCompare(second[SORT_PROPERTY_CREATOR]);
			});
        }

        return items;
	}
}