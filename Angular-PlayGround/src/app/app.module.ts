import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxJsTestComponent } from './rx-js-test/rx-js-test.component';
import { TypeScriptTestComponent } from './type-script-test/type-script-test.component';

@NgModule({
  declarations: [
    AppComponent,
    RxJsTestComponent,
    TypeScriptTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
