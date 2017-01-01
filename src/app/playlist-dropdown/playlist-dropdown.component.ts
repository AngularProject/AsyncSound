import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'playlist-dropdown',
  templateUrl: './playlist-dropdown.component.html',
  styleUrls: ['./playlist-dropdown.component.css']
})
export class PlaylistDropdownComponent implements OnInit {

  isVisible: boolean;

  constructor() {
    this.isVisible = false;
   }

  ngOnInit() {
  }

  showContent() {
    this.isVisible = !this.isVisible;
  }
}
