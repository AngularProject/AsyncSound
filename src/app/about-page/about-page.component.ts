import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
	private changedColor: string;
	
  	constructor() { }

 	ngOnInit() {
 		this.changedColor = 'rgba(243, 243, 243, 0.22)';
 	}

}
