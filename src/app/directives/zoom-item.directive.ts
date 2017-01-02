import { Directive, ElementRef, HostListener, Input } from '@angular/core';

const DEFAULT_BOX_SHADOW = '0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)';

@Directive({
  selector: '[zoom-item]'
})

export class ZoomItemDirective {
  @Input('zoom-item') newSize: string[];
  
  private currentElement: any;
  private isClicked: boolean;

  constructor(private element: ElementRef) { 
  	this.currentElement = this.element.nativeElement;
  	this.isClicked = false;
  }

  @HostListener('click') onClick() {
  	if(this.isClicked) {
  		this.isClicked = false;
    	this.changeSize([null, null, null]);

    	this.currentElement.style.left = '0';
    	this.currentElement.style.top = '0';
    	this.currentElement.style.boxShadow = DEFAULT_BOX_SHADOW;
  	} else {
  		this.isClicked = true;
    	this.changeSize(this.newSize);
  	}
  }

  private changeSize(size: string[]) {
    this.currentElement.style.width = size[0];
    this.currentElement.style.heigth = size[1];
    this.currentElement.style.padding = size[2];

    this.currentElement.style.left = '-10px';
    this.currentElement.style.top = '-8px';

    this.currentElement.style.boxShadow = '1px 7px 5px #bdbdbd';
  }
}