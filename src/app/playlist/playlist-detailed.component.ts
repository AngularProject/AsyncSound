import { Component, OnInit, Input } from '@angular/core';

import { PlaylistService } from '../../services/playlist.service';

import { SearchPlaylistPipe } from '../pipes/search.pipe';
import { SortPlaylistsPipe } from '../pipes/sort.pipe';

import { Playlist } from '../models/playlist';
import { Comment } from '../models/comment';

@Component({
  selector: '[app-detail-playlist]',
  templateUrl: './playlist-detailed.component.html'
})

export class PlaylistDetailedComponent implements OnInit {
  @Input() playlist: Playlist;
  isAdded: boolean = false;

  constructor(private playlistService: PlaylistService) {
  }

  ngOnInit() {
    let playlistsOfUser = JSON.parse(localStorage.getItem('playlist'));
    // console.log('here');
    // console.log(playlistsOfUser);
    if (!!playlistsOfUser) {
        playlistsOfUser.forEach((item) => {
          if (item.title === this.playlist.title) {
            console.log(item.title);
            this.isAdded = true;
          }
      });
    }
    
    // playlistsOfUser.forEach((item, index) => {
    // console.log(item);
    //     titles.push(item.title);
    // });

    // // this.isAdded = playlistsOfUser.title.indexOf(this.playlist.title) >= 0;
    // console.log(titles);
  }
}
