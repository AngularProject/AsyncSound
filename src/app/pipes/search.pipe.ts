import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'search' })
export class SearchPlaylistPipe implements PipeTransform {
    transform(items: any[], searchPattern: string): any[] {
        searchPattern = searchPattern || '';
        if (searchPattern === '') {
            return items;
        }

        return items.filter(item => item.title.toLowerCase().includes(searchPattern.toLowerCase()));
    }
}
