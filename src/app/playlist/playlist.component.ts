import { Component, OnInit } from '@angular/core';

import { PlaylistService } from '../../services/playlist.service';

import { SearchPlaylistPipe } from '../pipes/search.pipe';
import { SortPlaylistsPipe } from '../pipes/sort.pipe';

import { Playlist } from '../models/playlist';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {
  playlists: Playlist[] = [];
  audioInfo: any;
  isPaused = false;
  currentTime: any;

  searchByText: string;
  sortByProperty: string;

  constructor(private playlistService: PlaylistService) {
  }

  ngOnInit() {
    let testComment = new Comment('mnogo qk playlist', 'lud fen', Date.now(), ['1'], ['0']);

//     this.playlistService.createPlaylist(
//       new Playlist('BG rap',
//        'FenNaQvkata',
//        Date.now(),
//         [ 'Pojarogasitel', 'Podobren' ],
//         [ 'lud fen' ], [ '5'], [ '0' ],
//         [ testComment ]));

//     this.playlistService.createPlaylist(
//       new Playlist('BG rap some more',
//        'Dimaka RULES',
//         Date.now(),
//          [ '420', 'Body' ],
//           [ 'lud fen' ],
//            [ '7'],
//             [ '0' ],
//              [ testComment ]));

//  this.playlistService.createPlaylist(
//       new Playlist('BG rap za posledno',
//        'GarjokaSelski',
//         Date.now(),
//          [ 'Ne pomnq', 'kak se kazvashe' ],
//           [ 'lud fen' ],
//            [ '2'], [ '0' ],
//             [ testComment ]));

//     this.playlistService.createPlaylist(
//       new Playlist('BG rap samo znam',
//        'Alex P',
//         Date.now(),
//         [ 'Nalei', 'Belucci' ],
//          [ 'lud fen' ],
//           [ '9'],
//           [ '0' ], [ testComment ]));

//     this.playlistService.createPlaylist(
//       new Playlist('A trqbva da zapochva s a',
//         'Ima li znachenie',
//         Date.now(),
//         [ 'Ne, nqma' ],
//          [ 'fenka' ],
//           [ '0' ],
//           [ '0' ], [ testComment]));

        this.playlistService.getAllPlaylists()
        .subscribe((response: any) => {
            this.playlists = response;
        });
  }

  onSearchTextChange(searchValue: string) {
    this.searchByText = searchValue;
  }

    onSortTextChange(sortValue: string) {
        let updatedValue: string;
        switch (sortValue) {
            case 'Title':
                updatedValue = 'title';
                break;
            case 'Created by':
                updatedValue = 'creator';
                break;
            case 'Created on':
                updatedValue = 'createdOn';
                break;
            default:
                updatedValue = '';
        }

        this.sortByProperty = updatedValue;
    }
}
