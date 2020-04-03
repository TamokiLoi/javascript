import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColorModule } from '../color/color.module';
import { BoxSmallComponent } from './box-small.component';
import {
    BoxSmallContentDirective, BoxSmallFooterDirective, BoxSmallHeaderDirective
} from './box-small.directive';

@NgModule({
    imports: [CommonModule, ColorModule],
    exports: [BoxSmallComponent, BoxSmallHeaderDirective, BoxSmallContentDirective, BoxSmallFooterDirective],
    declarations: [BoxSmallComponent, BoxSmallHeaderDirective, BoxSmallContentDirective, BoxSmallFooterDirective]
})
export class BoxSmallModule { }
