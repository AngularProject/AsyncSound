import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-playlist',
  templateUrl: './search-playlist.component.html',
  styleUrls: ['./search-playlist.component.css']
})
export class SearchPlaylistComponent implements OnInit {
     @Output() onSearchTextChange: EventEmitter<string> = new EventEmitter<string>();
 
     searchText: string;
 
     constructor() { }
 
     ngOnInit() {
     }
 
     searchTextChange() {
         this.onSearchTextChange.emit(this.searchText);
     }
}
