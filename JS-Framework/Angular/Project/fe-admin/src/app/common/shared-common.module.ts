import { KeyFilterModule } from 'primeng/keyfilter';
import { TableModule } from 'primeng/table';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import {
    ButtonModule, DialogModule, InputTextModule, PaginatorModule, TooltipModule
} from '../components/template/prime-custom';
import { TranslateModule } from './translate/translate.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,

        // translate
        TranslateModule,

        // form
        FormsModule,
        ReactiveFormsModule,

        // module primeng
        TableModule,
        KeyFilterModule,

        // ng-select
        NgSelectModule,

        // module primeng-custom
        InputTextModule,
        ButtonModule,
        TooltipModule,
        PaginatorModule,
        DialogModule,
    ],
    exports: [
        CommonModule,

        // translate
        TranslateModule,

        // form
        FormsModule,
        ReactiveFormsModule,

        // ng-select
        NgSelectModule,

        // module primeng
        TableModule,
        KeyFilterModule,

        // module primeng-custom
        InputTextModule,
        ButtonModule,
        TooltipModule,
        PaginatorModule,
        DialogModule,
    ]
})
export class SharedCommonModule { }
