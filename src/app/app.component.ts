import { Component, OnInit } from '@angular/core';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  currentUser: User;
  title = 'AsyncSound welcomes you!';

  constructor(){
     this.currentUser = JSON.parse(localStorage.getItem('loggedUser'));
  }

  ngOnInit(){

  }
}
