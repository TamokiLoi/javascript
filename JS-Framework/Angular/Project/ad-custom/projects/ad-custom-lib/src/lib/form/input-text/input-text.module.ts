import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ColorModule } from '../../color/color.module';
import { InputTextDirective } from './input-text.directive';

@NgModule({
    imports: [
        CommonModule,
        ColorModule,
        FormsModule
    ],
    exports: [InputTextDirective],
    declarations: [InputTextDirective]
})
export class InputTextModule { }
