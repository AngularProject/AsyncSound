import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Playlist } from '../../models/playlist';

import { PlaylistService } from '../../../services/playlist.service';
import { NotificationsService } from '../../../../node_modules/angular2-notifications';

@Component({
  selector: 'app-list-playlist',
  templateUrl: './playlist-listing.component.html'
})

export class PlaylistListingComponent implements OnInit {
    playlists: Playlist[] = [];

    constructor(private playlistService: PlaylistService, private notification: NotificationsService) {
    }

    ngOnInit() {
        this.getUserPlaylist();
    }

      private getUserPlaylist() {
      let us = JSON.parse(localStorage.getItem('user'));
      this.playlistService.getAllPlaylistsOfUser(us.username)
        .subscribe((response: any) => {
           this.playlists = response;
        });
    }

    deleted(event) {
        this.getUserPlaylist();
    }
}
