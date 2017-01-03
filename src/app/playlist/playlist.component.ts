import { Component, OnInit } from '@angular/core';

import { PlaylistService } from '../../services/playlist.service';

import { SearchPlaylistPipe } from '../pipes/search.pipe';
import { SortPlaylistsPipe } from '../pipes/sort.pipe';

import { Playlist } from '../models/Playlist';
import { Comment } from '../models/Comment';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {
  playlists: Playlist[] = [];
  audioInfo: any;
  isPaused = false;
  currentTime: any;

  searchByText: string;
  sortByText: string;

  constructor(private playlistService: PlaylistService) {
  }

  ngOnInit() {
        this.playlistService.getAllPlaylists()
        .subscribe((response: any) => {
            this.playlists = response;
        });
  }

  onSearchTextChange(searchValue: string) {
    this.searchByText = searchValue;
  }

  onSortTextChange(sortValue: string) {
    this.sortByText = sortValue;
  }
}
