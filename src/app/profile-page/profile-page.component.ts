import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../../services/playlist.service';

import { User } from '../models/User';
import { Playlist } from '../models/playlist';
import { Comment } from '../models/comment';

import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent implements OnInit {
 currentUser: User;
 playlists: Playlist[] = [];

   constructor(private _activatedRoute: ActivatedRoute, private profileService: ProfileService) {
      this.currentUser = JSON.parse(localStorage.getItem('user'));

      this._activatedRoute.params
            .map(params => params['id'])
            .subscribe((id) => {
                this.getUser(id);
            });
      }

    ngOnInit() {
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
}
