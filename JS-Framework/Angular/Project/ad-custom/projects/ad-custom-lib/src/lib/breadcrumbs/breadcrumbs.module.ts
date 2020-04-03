import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [BreadcrumbsComponent],
    declarations: [BreadcrumbsComponent]
})
export class BreadcrumbsModule { }
