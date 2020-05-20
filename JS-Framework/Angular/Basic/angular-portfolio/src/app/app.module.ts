import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { AboutComponent } from './layout/about/about.component';
import { ContactComponent } from './layout/contact/contact.component';
import { AdminModule } from './admin/admin.module';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCH0gDgUrOFUMA_ofIwQrIuvwJhI-NLAto",
  authDomain: "loinlt-angular-portfolio-9f97a.firebaseapp.com",
  databaseURL: "https://loinlt-angular-portfolio-9f97a.firebaseio.com",
  projectId: "loinlt-angular-portfolio-9f97a",
  storageBucket: "loinlt-angular-portfolio-9f97a.appspot.com",
  messagingSenderId: "425686448309",
  appId: "1:425686448309:web:6dffeb5b1c2f6ff5b1e6fc",
  measurementId: "G-1XG2HTMB40"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
