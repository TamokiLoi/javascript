import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AnimationsModule } from '../../animations/animations.module';
import { SidebarLeftComponent } from './sidebar-left.component';
import { SidebarLeftToggleDirective } from './sidebar-left.directive';

@NgModule({
    imports: [CommonModule, RouterModule, AnimationsModule],
    exports: [SidebarLeftComponent],
    declarations: [SidebarLeftToggleDirective, SidebarLeftComponent]
})
export class SidebarLeftModule { }
