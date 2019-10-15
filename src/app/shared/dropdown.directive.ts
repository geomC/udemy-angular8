import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropdownDirective implements OnInit {

  private CLASS_NAME = 'open'; // the bootstrap class to toggle
  private toggled = false;

  @HostBinding('classList') classList: DOMTokenList;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.classList = this.elementRef.nativeElement.classList;
  }

  @HostListener('click') toggleClass($event: Event) {
    if (!this.toggled) {
      this.renderer.addClass(this.elementRef.nativeElement, this.CLASS_NAME);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, this.CLASS_NAME);
    }
  }
}
