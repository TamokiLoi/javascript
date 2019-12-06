import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnimationsModule } from '../animations/animations.module';
import { ColorModule } from '../color/color.module';
import { BoxComponent } from './box.component';
import {
    BoxContentDirective, BoxFooterDirective, BoxHeaderDirective, BoxToolsDirective
} from './box.directive';

@NgModule({
    declarations: [BoxComponent, BoxHeaderDirective, BoxContentDirective, BoxFooterDirective, BoxToolsDirective],
    imports: [CommonModule, AnimationsModule, ColorModule],
    exports: [BoxComponent, BoxHeaderDirective, BoxContentDirective, BoxFooterDirective,
        BoxToolsDirective],
})
export class BoxModule { }
