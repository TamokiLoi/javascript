import { LayoutModule } from 'ad-custom-lib';
import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { adminLteConf } from './admin-lte.conf';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { LayoutLocalModule } from './components/layout/layout.module';
import { AuthGuard } from './guards';
import { APIConfig } from './components/layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    LayoutLocalModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule
  ],
  providers: [
      APIConfig,
      AuthGuard, 
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
