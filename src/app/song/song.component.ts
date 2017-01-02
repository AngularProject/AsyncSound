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
  searchByText: string;

  currentPage: number = 1;
  pageSize: number = 10;
  pages: number;
  pagesNumbers: number[];

  newWidth: string = '485px';
  newHeigth: string = '80px';
  newPadding: string = '-10px';
  changedSize: string[];

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

    this.changedSize = [ this.newWidth, this.newHeigth, this.newPadding ];
 }

  public getSongByTitle(title) {
     this.songService
         .getSongByTitle(title)
         .subscribe(response => {

            if(response.error) {
              return;
            } else {
              this.songs = response as Song[];
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

              this.pages = Math.ceil(this.songs.length / this.pageSize);
              this.pagesNumbers = Array(this.pages).fill(0).map((x, page) => page + 1);
            };
        }, ()=> this.notification.error('Loading songs failed', 'Error'))
  }

  private onSearchTextChange(searchValue: string) {
    this.searchByText = searchValue;
  }
  
  private onPageClick(page: number){
    this.currentPage = page;
  }
}
