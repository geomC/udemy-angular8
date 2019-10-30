import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder.directive';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';

// idea here: import everything needed by multiple modules and export everything again
// so it can be used in the consuming component

// skip services since they are special.
@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective
  ],
  imports: [
    CommonModule, // also modules that are shared by consuming modules,
  ],
  exports: [
    CommonModule,
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective
  ],
  // all services with root scope
  entryComponents: [ // component types that are not created by selector in a template OR in a routing config
    AlertComponent
  ],
})
export class SharedModule {

}
