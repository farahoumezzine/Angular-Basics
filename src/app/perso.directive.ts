import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPerso]'
})
export class PersoDirective implements OnInit {
  @Input() appPerso: string = 'yellow';
  private originalColor: string;

  constructor(private el: ElementRef) {
    this.originalColor = this.el.nativeElement.style.backgroundColor || 'transparent';
  }

  ngOnInit() {
    // Ensure the input color is set, defaulting to yellow if not provided
    this.appPerso = this.appPerso || 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appPerso);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.originalColor);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
