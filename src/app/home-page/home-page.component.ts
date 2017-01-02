import { Component, OnInit } from '@angular/core';

import { User } from '../models/User';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  currentUser: User;

  backgroundBlur: string = 'blur(1px)';
  backgroundOpacity: number = 0.98;
  backgroundFilter: any[];

  constructor() { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.backgroundFilter = [ this.backgroundBlur, this.backgroundOpacity ];
  }

}
