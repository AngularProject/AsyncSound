import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../models/User';
import { Playlist } from '../models/playlist';
import { Comment } from '../models/comment';

import { ProfileService } from '../../services/profile.service';
import { PlaylistService } from '../../services/playlist.service';

// TODO: user should be able to change it's avatar
const DEFAULT_AVATAR_URL = 'http://localhost:3000/static/images/default-avatar.png';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent implements OnInit {
   private changedColor: string;

   currentUser: User;
   userAvatarUrl: string;
   playlists: Playlist[] = [];
   isTrue = true;

   constructor(private _activatedRoute: ActivatedRoute,
    private profileService: ProfileService,
    private playlistService: PlaylistService) {
      this.currentUser = JSON.parse(localStorage.getItem('user'));

      // this.userAvatarUrl = this.profileService.getUserAvatar(this.currentUser.username);
      this.userAvatarUrl = DEFAULT_AVATAR_URL;
            this.getUserPlaylist();

      // this._activatedRoute.params
      //       .map(params => params['id'])
      //       .subscribe((id) => {
      //           this.getUser(id);
      //       });
      }

    ngOnInit() {
       this.changedColor = 'rgba(243, 243, 243, 0.22)';

       this._activatedRoute.params
          .map(params => params['id'])
          .subscribe((id) => {
            this.getUser(id);
          });
    }

    private getUser(id) {
        this.profileService.getUserProfile(id)
        .subscribe((response: any) => {
          this.currentUser = response;
        });
    }

    getUserPlaylist() {
      // if (this.isTrue) {
      console.log("here?");
      //   this.isTrue = false;
      let us = JSON.parse(localStorage.getItem('user'));
      this.playlistService.getAllPlaylistsOfUser(us._id)
         .subscribe((response: any) => {
           
           this.playlists = response;
           console.log(this.playlists);
        });
        // }
    }
}
