import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  @HostListener('mouseenter') mouseover($event: Event) { // links dom event on our element to a custom callback
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      '#7CBEDD');
  }

  @HostListener('mouseleave') mouseleave($event: Event) { // links dom event on our element to a custom callback
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'transparent');
  }

}
