import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnimationsModule } from '../animations/animations.module';
import { ColorModule } from '../color/color.module';
import {
    AccordionComponent, AccordionContentComponent, AccordionGroupComponent, AccordionHeaderComponent
} from './accordion.component';
import { AccordionToggleDirective } from './accordion.directive';

@NgModule({
    imports: [CommonModule, AnimationsModule, ColorModule],
    exports: [AccordionHeaderComponent, AccordionContentComponent, AccordionComponent, AccordionGroupComponent],
    declarations: [AccordionToggleDirective, AccordionHeaderComponent,
        AccordionContentComponent, AccordionComponent, AccordionGroupComponent]
})
export class AccordionModule { }
