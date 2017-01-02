import { Directive, HostListener, Input } from '@angular/core';

const DEFAULT_BLUR = 'blur(1px)';
const DEFAULT_OPACITY = 0.9;

@Directive({
  selector: '[blur-background]'
})

export class BlurBackgroundDirective {
  @Input('blur-background') filterValues: any[];

  constructor() { }

  @HostListener('mouseenter') onMouseEnter() {
  	this.blur(this.filterValues);
  }

  @HostListener('mouseleave') onMouseLeave() {
  	this.blur([null, null]);
  }

  private blur(filterValues: any[]) {
  	document.getElementById('blur-section').style.filter = filterValues[0];
  	document.getElementById('blur-section').style.opacity = filterValues[1];
  }
}
