import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropdownDirective {

 @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleClass($event: Event) {
    this.isOpen = !this.isOpen;
  }
}
