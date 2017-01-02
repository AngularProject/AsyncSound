import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlighter]'
})

export class HighlighterDirective {

  constructor(private element: ElementRef) { }

  @Input('highlighter') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'rgba(243, 243, 243, 0.15)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}