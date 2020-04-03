import { DropdownModule, BoxModule, TabsModule } from 'ad-custom-lib';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { HeaderInnerComponent } from './header-inner/header-inner.component';
import { SidebarLeftInnerComponent } from './sidebar-left-inner/sidebar-left-inner.component';
import { SidebarRightInnerComponent } from './sidebar-right-inner/sidebar-right-inner.component';

@NgModule({
    declarations: [
        LoginComponent,
        Page404Component,
        Page500Component,
        HeaderInnerComponent,
        SidebarLeftInnerComponent,
        SidebarRightInnerComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DropdownModule,
        TabsModule,
        BoxModule
    ],
    exports: [
        LoginComponent,
        Page404Component,
        Page500Component,
        DropdownModule,
        BoxModule, 
        TabsModule,
        HeaderInnerComponent,
        SidebarLeftInnerComponent,
        SidebarRightInnerComponent,
    ]
})
export class LayoutLocalModule { }
