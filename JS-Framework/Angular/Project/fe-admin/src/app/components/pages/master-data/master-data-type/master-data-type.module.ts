import { SharedCommonModule } from 'src/app/common';

import { NgModule } from '@angular/core';

import { MasterDataTypeCruComponent } from './cru/master-data-type-cru.component';
import { MasterDataTypeListComponent } from './list/master-data-type-list.component';
import { MasterDataTypeRoutingModule } from './master-data-type.routes';
import { MasterDataTypeService } from './master-data-type.service';

@NgModule({
    declarations: [
        MasterDataTypeListComponent,
        MasterDataTypeCruComponent
    ],
    imports: [
        MasterDataTypeRoutingModule,
        SharedCommonModule
    ],
    providers: [MasterDataTypeService]
})
export class MasterDataTypeModule { }
