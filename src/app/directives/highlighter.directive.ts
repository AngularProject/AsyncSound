import { Directive, ElementRef, HostListener, Input } from '@angular/core';

const DEFAULT_HIGHLIGHT_COLOR = 'rgba(243, 243, 243, 0.15)';

@Directive({
  selector: '[highlighter]'
})

export class HighlighterDirective {
  @Input('highlighter') highlightColor: string;

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || DEFAULT_HIGHLIGHT_COLOR);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
