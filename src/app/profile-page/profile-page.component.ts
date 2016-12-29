import { Component, OnInit } from '@angular/core';

import { PlaylistService } from '../../services/playlist.service';

import { User } from '../models/User';
import { Playlist } from '../models/playlist';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
 currentUser: User;
 playlists: Playlist[] = [];

  constructor(private playlistService: PlaylistService) {
    this.currentUser = JSON.parse(localStorage.getItem('loggedUser'));
  }

  ngOnInit() {
  }

}
