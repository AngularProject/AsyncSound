import { Component, OnInit, Input } from '@angular/core';

import { PlaylistService } from '../../services/playlist.service';

import { SearchPlaylistPipe } from '../pipes/search.pipe';
import { SortPlaylistsPipe } from '../pipes/sort.pipe';

import { Playlist } from '../models/playlist';
import { Comment } from '../models/comment';

@Component({
  selector: '[app-detail-playlist]',
  templateUrl: './playlist-detailed.component.html'
})

export class PlaylistDetailedComponent implements OnInit {
  @Input() playlist: Playlist;

  constructor(private playlistService: PlaylistService) {
  }

  ngOnInit() {
  }
}
