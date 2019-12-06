import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PaginatorModule } from './paginator/paginator';

@NgModule({
    imports: [
        CommonModule,
        PaginatorModule,
    ],
    declarations: [],
    exports: [
        PaginatorModule,
    ]
})
export class PrimeCustomModule { }
