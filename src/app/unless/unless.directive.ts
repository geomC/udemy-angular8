import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // setter für diese Eigenschaft. Aufgerufen wenn sich die Eigenschaft von außen ändert
  @Input('appUnless') set unless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  // since structural directives create templates behind the scenes, the element we are dealing with is a template
  constructor(
    private templateRef: TemplateRef<any>, // what the directive is applied to
    private vcRef: ViewContainerRef // where is the element rendered
  ) { }

}
