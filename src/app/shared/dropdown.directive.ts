import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropdownDirective {

  private CLASS_NAME = 'open'; // the bootstrap class to toggle
  private toggled = false;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
  }

  @HostListener('click') toggleClass($event: Event) {
    if (!this.toggled) {
      this.renderer.addClass(this.elementRef.nativeElement, this.CLASS_NAME);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, this.CLASS_NAME);
    }

    this.toggled = !this.toggled;
  }
}
