import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { APIConfig, HttpClientService } from './common';
import { DialogService } from './common/services';
import { TranslateModule } from './common/translate/translate.module';
import { LayoutLocalModule } from './components/layout/layout-local.module';
import { LayoutModule } from './components/template/adminlte-custom';
import { ConfirmDialogModule, ToastModule } from './components/template/prime-custom';
import { ConfirmationService, MessageService } from './components/template/prime-custom/common/api';
import { Menu } from './common/constant';
import { AuthGuard } from './common/guards/auth.guard';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        // routing and httpclient
        AppRoutingModule,
        HttpClientModule,

        // layout
        LayoutLocalModule,
        LayoutModule.forRoot(Menu),

        // translate
        TranslateModule.forRoot(),

        // template primeng-custom
        ToastModule,
        ConfirmDialogModule
    ],
    providers: [
        AuthGuard,
        APIConfig,
        HttpClientService,
        MessageService,
        ConfirmationService,
        DialogService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
