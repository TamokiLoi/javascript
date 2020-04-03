import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColorModule } from '../color/color.module';
import { BoxInfoComponent } from './box-info.component';
import {
    BoxInfoContentDirective, BoxInfoFooterDirective, BoxInfoHeaderDirective
} from './box-info.directive';

@NgModule({
    imports: [CommonModule, ColorModule],
    exports: [BoxInfoComponent, BoxInfoHeaderDirective, BoxInfoContentDirective, BoxInfoFooterDirective],
    declarations: [BoxInfoComponent, BoxInfoHeaderDirective, BoxInfoContentDirective, BoxInfoFooterDirective]
})
export class BoxInfoModule { }
