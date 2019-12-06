

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BoxModule, DropdownModule, TabsModule } from '../template/adminlte-custom';
import { ToastModule, InputTextModule } from '../template/prime-custom';
import { HeaderInnerComponent } from './header-inner/header-inner.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { SidebarLeftInnerComponent } from './sidebar-left-inner/sidebar-left-inner.component';
import { SidebarRightInnerComponent } from './sidebar-right-inner/sidebar-right-inner.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
    declarations: [
        LoginComponent,
        HomeComponent,
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

        // template adminlte-custom
        DropdownModule,
        TabsModule,
        BoxModule,

        // template primeng-custom
        ToastModule,
        InputTextModule,

        // ng-select
        NgSelectModule
    ],
    exports: [
        LoginComponent,
        HomeComponent,
        Page404Component,
        Page500Component,
        HeaderInnerComponent,
        SidebarLeftInnerComponent,
        SidebarRightInnerComponent,
        DropdownModule,
        BoxModule,
        TabsModule,
    ]
})
export class LayoutLocalModule { }
