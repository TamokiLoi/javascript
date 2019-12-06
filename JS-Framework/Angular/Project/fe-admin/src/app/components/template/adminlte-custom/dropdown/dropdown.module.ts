import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnimationsModule } from '../animations/animations.module';
import { ColorModule } from '../color/color.module';
import {
    DropdownComponent, DropdownMenuComponent, DropdownToggleComponent
} from './dropdown.component';

@NgModule({
    declarations: [DropdownComponent, DropdownToggleComponent, DropdownMenuComponent],
    imports: [CommonModule, AnimationsModule, ColorModule],
    exports: [DropdownComponent, DropdownToggleComponent, DropdownMenuComponent]
})
export class DropdownModule { }
