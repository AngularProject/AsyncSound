import { Component, OnInit } from '@angular/core';

import { Song } from '../models/Song';
import { SongService } from '../../services';
import { NotificationsService } from '../../../node_modules/angular2-notifications';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  // TODO!
  songs: Song[];
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
              this.notification.success('Songs loaded', ':)');
              this.songs = response as Song[];
            };
        }, ()=> this.notification.error('Loading songs failed', 'Error'))
  }

}
