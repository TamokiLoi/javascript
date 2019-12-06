import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColorModule } from '../color/color.module';
import {
    TabComponent, TabContentComponent, TabHeaderComponent, TabsComponent, TabsHeaderComponent
} from './tabs.component';
import { TabToggleDirective } from './tabs.directive';

@NgModule({
    declarations: [TabToggleDirective, TabsComponent, TabsHeaderComponent, TabComponent, TabHeaderComponent, TabContentComponent],
    imports: [CommonModule, ColorModule],
    exports: [TabsComponent, TabsHeaderComponent, TabComponent, TabHeaderComponent, TabContentComponent],
})
export class TabsModule { }
