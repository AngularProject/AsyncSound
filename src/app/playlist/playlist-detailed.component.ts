import { Component, OnInit, Input } from '@angular/core';

import { PlaylistService } from '../../services/playlist.service';
import { NotificationsService } from '../../../node_modules/angular2-notifications';

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

  constructor(private playlistService: PlaylistService, private notification: NotificationsService) {
  }

  ngOnInit() {
    this.checkIfPinned();
  }

  addPlaylist() {
    let user = JSON.parse(localStorage.getItem('user')).username;
    let body = { 
      user,
      playlist: this.playlist
    };

    this.playlistService.pinPlaylist(body)
      .subscribe((response: any) => {
           if (response.error) {
                    this.notification.error('Something went wrong', response.error);
                } else {
                    this.checkIfPinned();
                    // localStorage.removeItem('playlist');
                    this.notification.success(`Playlist ${this.playlist.title} pinned successfully!`, response.message);
                }
      });
  }

  private checkIfPinned() {
     let playlistsOfUser = JSON.parse(localStorage.getItem('playlist'));
    if (!!playlistsOfUser) {
        playlistsOfUser.forEach((item) => {
          if (item.title === this.playlist.title) {
            this.isAdded = true;
          }
      });
    }
  }
}
