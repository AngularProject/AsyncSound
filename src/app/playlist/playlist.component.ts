import { Component, OnInit } from '@angular/core';

import { PlaylistService } from '../../services/playlist.service';

import { SearchPlaylistPipe } from '../pipes/search.pipe';
import { SortPlaylistsPipe } from '../pipes/sort.pipe';

import { Playlist } from '../models/playlist';
import { Comment } from '../models/comment';

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
  sortByProperty: string;

  constructor(private playlistService: PlaylistService) {
  }

  ngOnInit() {
    let testComment = new Comment('mnogo qk playlist', 'lud fen', Date.now(), ['1'], ['0']);
    
        this.playlistService.getAllPlaylists()
        .subscribe((response: any) => {
            this.playlists = response;
        });
  }

  onSearchTextChange(searchValue: string) {
    this.searchByText = searchValue;
  }

    onSortTextChange(sortValue: string) {
        let updatedValue: string;
        switch (sortValue) {
            case 'Title':
                updatedValue = 'title';
                break;
            case 'Created by':
                updatedValue = 'creator';
                break;
            case 'Created on':
                updatedValue = 'createdOn';
                break;
            default:
                updatedValue = '';
        }

        this.sortByProperty = updatedValue;
    }
}
