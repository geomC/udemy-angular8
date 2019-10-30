import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholder]'
})
export class PlaceholderDirective {

  constructor(
    // gives components access to the place where this directive is used from outside (by making it public)
    public viewContainerRef: ViewContainerRef
  ) { }

}
