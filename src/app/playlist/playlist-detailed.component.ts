import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PlaylistService } from '../../services/playlist.service';
import { NotificationsService } from '../../../node_modules/angular2-notifications';

import { SearchPlaylistPipe } from '../pipes/search.pipe';
import { SortPlaylistsPipe } from '../pipes/sort.pipe';

import { Playlist } from '../models/Playlist';
import { Comment } from '../models/Comment';

@Component({
  selector: '[app-detail-playlist]',
  templateUrl: './playlist-detailed.component.html'
})

export class PlaylistDetailedComponent implements OnInit {
  @Input() playlist: Playlist;
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  isAdded: boolean = false;
  loggedUserPlaylists: Playlist[];
  isLogged = false;

  constructor(private playlistService: PlaylistService, private notification: NotificationsService) {
  }

  ngOnInit() {
    this.isLogged = !!localStorage.getItem('user');
    if (this.isLogged) {
        this.getUserPlaylist();
    }
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
                            this.isAdded = true;
                            this.notification.success(`Playlist ${this.playlist.title} pinned successfully!`, response.message);
                        }
              });
  }

  removePlaylist() {

         let user = JSON.parse(localStorage.getItem('user')).username;
      let body = {
        user,
        playlist: this.playlist
      };

      this.playlistService.removePlaylist(body)
      .subscribe((response: any) => {
           if (response.error) {
                    this.notification.error('Something went wrong', response.error);
                } else {
                    this.isAdded = false;
                    this.delete.emit('Emitted ' + this.playlist.title);
                    this.notification.success(`Playlist ${this.playlist.title} unpinned successfully!`, response.message);
                }
      });

    }

    private getUserPlaylist() {
      let us = JSON.parse(localStorage.getItem('user'));
      this.playlistService.getAllPlaylistsOfUser(us.username)
        .subscribe((response: any) => {
           this.loggedUserPlaylists = response;
            this.loggedUserPlaylists.forEach((item) => {
              if (item.title === this.playlist.title) {
                this.isAdded = true;
              }
          });
        });
    }
}
