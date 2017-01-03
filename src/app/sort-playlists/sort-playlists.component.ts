import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort-playlists',
  templateUrl: './sort-playlists.component.html',
  styleUrls: ['./sort-playlists.component.css']
})
export class SortPlaylistsComponent implements OnInit {
  @Output() onSortTextChange: EventEmitter<string> = new EventEmitter<string>();

    sortText: string;

    constructor() {
    }

    ngOnInit() {
    }

    sortTextChange(updatedValue: string) {
        this.onSortTextChange.emit(this.sortText);
    }
}
