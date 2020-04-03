import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnimationsModule } from '../animations/animations.module';
import { ColorModule } from '../color/color.module';
import { AlertComponent } from './alert.component';

@NgModule({
    imports: [CommonModule, AnimationsModule, ColorModule],
    exports: [AlertComponent],
    declarations: [AlertComponent]
})
export class AlertModule { }
