import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string; // to which property of the hosting element we want to bind

  @HostListener('mouseenter') mouseover($event: Event) { // links dom event on our element to a custom callback
    this.backgroundColor = '#7CBEDD';
  }

  @HostListener('mouseleave') mouseleave($event: Event) { // links dom event on our element to a custom callback
    this.backgroundColor = 'transparent';
  }
}
