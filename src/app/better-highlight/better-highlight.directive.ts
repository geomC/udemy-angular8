import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = '#7CBEDD';

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string; // to which property of the hosting element we want to bind

  @HostListener('mouseenter') mouseover($event: Event) { // links dom event on our element to a custom callback
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave($event: Event) { // links dom event on our element to a custom callback
    this.backgroundColor = this.defaultColor;
  }
}
