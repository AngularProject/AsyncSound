import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort-playlists',
  templateUrl: './sort-playlists.component.html',
  styleUrls: ['./sort-playlists.component.css']
})
export class SortPlaylistsComponent implements OnInit {
  @Output() onUpdateSortBy: EventEmitter<string>;

    sortBy: string;

    constructor() {
        this.onUpdateSortBy = new EventEmitter<string>();

        this.sortBy = 'Created on';
    }

    ngOnInit() {
    }

    sortByChange(updatedValue: string) {
        if (!updatedValue || typeof updatedValue !== 'string') {
            updatedValue = 'Created on';
        }

        this.sortBy = updatedValue;
        this.onUpdateSortBy.emit(this.sortBy);
    }
}
