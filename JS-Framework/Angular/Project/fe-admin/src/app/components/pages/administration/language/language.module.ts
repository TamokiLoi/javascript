import { SharedCommonModule } from 'src/app/common';
import { CommonService } from 'src/app/common/services';
import { TranslatePipe, TranslateService } from 'src/app/common/translate';

import { NgModule } from '@angular/core';

import { LanguageComponent } from './language.component';
import { LanguageRoutingModule } from './language.routes';
import { LanguageAdminService } from './language.service';

@NgModule({
    declarations: [LanguageComponent],
    imports: [LanguageRoutingModule, SharedCommonModule],
    providers: [LanguageAdminService, CommonService, TranslateService, TranslatePipe]
})
export class LanguageModule { }
