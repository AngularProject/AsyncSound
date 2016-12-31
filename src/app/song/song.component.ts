import { Component, OnInit } from '@angular/core';

import { SongService } from '../../services';
import { NotificationsService } from '../../../node_modules/angular2-notifications';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  // TODO!
  songs: Array<any>;
  constructor(private songService: SongService, private notification: NotificationsService) { }

  ngOnInit() {
    this.getAllSongs();
  }

  getAllSongs() {
    this.songService
        .getAllSongs()
        .subscribe( response => {
            if(response.error) {
              this.notification.error('Loading songs failed', response.message);
            } else {
              this.songs = response as Array<any>;
            };
        })
  }

}
