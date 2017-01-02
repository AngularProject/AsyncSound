import { Song } from '../models/Song';
import { Component, OnInit, Input } from '@angular/core';
import { PlaylistService, LoginService} from '../../services';
import { NotificationsService } from '../../../node_modules/angular2-notifications';


@Component({
  selector: 'playlist-dropdown',
  templateUrl: './playlist-dropdown.component.html',
  styleUrls: ['./playlist-dropdown.component.css']
})
export class PlaylistDropdownComponent implements OnInit {

  @Input() song;
  isLogged: boolean;
  isVisible: boolean;
  playlists: Array<any>;

  constructor(private loginService: LoginService, private playlistService: PlaylistService, private notification: NotificationsService) {
    this.isVisible = false;

    this.isLogged = this.loginService.isUserLogged();
   }

  ngOnInit() {
  }

  public showContent() {
    this.isVisible = !this.isVisible;
  }

  public getUserPlaylists() {
    const user = JSON.parse(localStorage.getItem('user'));
    const username = user.username;
    const hasPlaylist = localStorage.getItem('playlist');
    if(!hasPlaylist) {
      this.playlistService
          .getUserPlaylists(username)
          .subscribe(response => {
            console.log(response);
            if(response.error) {
                this.notification.error('Loading playlist failed', response.message);
              } else {
                this.playlists = response as Array<any>;
                localStorage.setItem('playlist', JSON.stringify(this.playlists));
              };
          }, () => this.notification.error('Loading playlist failed', 'Error'))
    } else {
        const playlists = JSON.parse(hasPlaylist);
        this.playlists = playlists;
    }
  }

  public addSongInPlaylist(playlistId) {
    let data = {
      id: playlistId,
      song: {
        title: this.song.title,
        mp3Url: this.song.mp3Url,
        oggUrl: this.song.oggUrl
      }
    }

    this.playlistService
        .addSongInPlaylist(data)
        .subscribe((response: any) => {
          if(response.error) {
            this.notification.error('Adding song failed', response.message);
          } else {
            this.notification.success('Sync completed', 'Keep adding');
          }
        },() => this.notification.error('Adding song failed', 'Please try again.'))
  }
}
