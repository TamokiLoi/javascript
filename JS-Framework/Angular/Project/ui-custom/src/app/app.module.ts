import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UICustomLibModule } from 'ui-custom-lib';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    UICustomLibModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
