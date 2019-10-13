import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]' // unique, camel-cased. The brackets tell angular to look for an attribute
})
export class BasicHighlightDirective implements OnInit {
  constructor(

    private elementRef: ElementRef) { // dependency injection. the element the directive is applied to
    // note that the "private" in front of the param is TS syntacical sugar to assign the value of the param to a new class member
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
