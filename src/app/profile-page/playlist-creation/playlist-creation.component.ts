import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Playlist } from '../../models/playlist';

import { PlaylistService } from '../../../services/playlist.service';
import { NotificationsService } from '../../../../node_modules/angular2-notifications';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './playlist-creation.component.html',
  styleUrls: [ './playlist-creation.component.css' ]
})

export class PlaylistCreationComponent implements OnInit {
    model: any;

    constructor(private playlistService: PlaylistService, private notification: NotificationsService) {
    }

    ngOnInit() {
    }

    createPlaylist() {
        let creator = JSON.parse(localStorage.getItem('user'));
        let createdOn = Date.now();
        let playlist = new Playlist(this.model, creator.username, createdOn, [], [], [], [], []);

        this.playlistService.createPlaylist(playlist)
            .subscribe((response: any) => {
                    if (response.error) {
                    this.notification.error('Something went wrong', response.error);
                } else {
                    localStorage.removeItem('playlist');
                    this.notification.success(`Created playlist ${this.model} successfully!`, response.message);
                }
            });
    }
}
