import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {AuthInterceptorService} from './auth-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [{
    // tell ng that we to use our interceptor
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true // do not replace the existing interceptors, use many interceptors
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
