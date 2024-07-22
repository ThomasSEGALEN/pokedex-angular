import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]',
  standalone: true
})
export class PokemonBorderCardDirective {
  initialColor: string = '#f5f5f5';
  defaultColor: string = '#009688';
  defaultHeight: number = 180;

  constructor(private element: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input('appBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter(): void {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.setBorder(this.initialColor);
  }

  setHeight(height: number): void {
    this.element.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string): void {
    this.element.nativeElement.style.border = `2px solid ${color}`;
  }
}
