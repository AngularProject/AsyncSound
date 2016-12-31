import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(private playlistService: PlaylistService, private profileService: ProfileService) {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.getUser();
    // console.log(this.currentUser);
  }

  //  constructor(private _activatedRoute: ActivatedRoute, private _router:Router, private profileService: ProfileService) {
  //     _router.routerState.queryParams
  //     .subscribe(
  //         data => console.log('queryParams', data['id']));
  //       // this.getUser();
  //     }

    ngOnInit() {
    this.getUser();
    }

    private getUser() {

        // TODO: Take id from query param
        // it will not be working with this id :) 

        // this.profileService.getUserProfile('5866ebcdee2b1321ec233043')
        // .subscribe((response: any) => {
        //   // console.log(response);
        //   this.currentUser = response;
        // });
    }
}
