import { Component, OnInit, Output } from '@angular/core';

import { Song } from '../models/Song';
import { SongService, PageService } from '../../services';
import { NotificationsService } from '../../../node_modules/angular2-notifications';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})

export class SongComponent implements OnInit {
  @Output() song;

  songs: Song[];
  pageInfo: any = {};
  pagedItems: any[];
  searchingSong: string;
  constructor(private songService: SongService,
              private notification: NotificationsService,
              private pageService: PageService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
   }

  ngOnInit() {
    this.activatedRoute.params
        .map(query=> query['title'])
        .subscribe(title=>{
            if(!!title) {
              this.getSongByTitle(title)
            } else {
              this.getAllSongs();
            }
        });
  }

  public getSongByTitle(title) {
     this.songService
         .getSongByTitle(title)
         .subscribe(response => {

            if(response.error) {
              return;
            } else {
              this.notification.success('Songs loaded', ':)');
              this.songs = response as Song[];
              this.setPage(1);
            };
        }, ()=> this.notification.error('Loading songs failed', 'Error'))
  }

  public getAllSongs() {
    this.songService
        .getAllSongs()
        .subscribe( response => {
            if(response.error) {
              this.notification.error('Loading songs failed', response.message);
            } else {
              this.songs = response as Song[];
              this.setPage(1);
            };
        }, ()=> this.notification.error('Loading songs failed', 'Error'))
  }

  public search() {
    let url = '/songs/' + this.searchingSong;
    this.searchingSong = '';

    this.router.navigateByUrl(url);
  }
  public setPage(page: number) {
      if (page < 1 || page > this.pageInfo.totalPages) {
            return;
        }

        this.pageInfo = this.pageService.getPage(this.songs.length, page);
        this.pagedItems = this.songs.slice(this.pageInfo.startIndex, this.pageInfo.endIndex + 1);
    }
  }
