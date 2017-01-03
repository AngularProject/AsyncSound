import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pagination'
})
export class PaginationPipe implements PipeTransform {
    transform(items: any[], page: number, pageSize: number) {
        if (!items) {
            return null;
        }
        let start = (page - 1) * pageSize;
        let end = start + pageSize;

        return items.slice(start, end);
    }
}
