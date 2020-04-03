import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RoutingService } from '../services/routing.service';
import { ContentModule } from './content/content.module';
import { FooterModule } from './footer/footer.module';
import { FooterService } from './footer/footer.service';
import { HeaderModule } from './header/header.module';
import { HeaderService } from './header/header.service';
import { layoutProvider } from './layout.provider';
import { LayoutService } from './layout.service';
import { LayoutState } from './layout.state';
import { SidebarLeftModule } from './sidebar-left/sidebar-left.module';
import { SidebarRightModule } from './sidebar-right/sidebar-right.module';
import { SidebarRightService } from './sidebar-right/sidebar-right.service';
import { WrapperModule } from './wrapper/wrapper.module';
import { WrapperService } from './wrapper/wrapper.service';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [ContentModule, FooterModule, HeaderModule, SidebarLeftModule, SidebarRightModule, WrapperModule],
    providers: [RoutingService, WrapperService, SidebarRightService, HeaderService, FooterService]
})
export class LayoutModule {

    /**
     * @method constructor
     * @param parentModule [description]
     */
    constructor(@Optional() @SkipSelf() parentModule: LayoutModule) {
        if (parentModule) {
            throw new Error('LayoutModule is already loaded. Import it in the AppModule only!');
        }
    }

    /**
     * [forRoot description]
     * @method forRoot
     * @param  layoutConfig [description]
     * @return [description]
     */
    static forRoot(layoutConfig: LayoutState): ModuleWithProviders {
        return {
            ngModule: LayoutModule,
            providers: [...layoutProvider(layoutConfig), LayoutService]
        };
    }
}

export * from './layout.service';
export * from './layout.store';
export * from './layout.state';
