import { SharedCommonModule } from 'src/app/common';

import { NgModule } from '@angular/core';

import { MasterDataTypeService } from '../master-data-type/master-data-type.service';
import { MasterDataCruComponent } from './cru/master-data-cru.component';
import { MasterDataListComponent } from './list/master-data-list.component';
import { MasterDataListRoutingModule } from './master-data-list.routes';
import { MasterDataListService } from './master-data-list.service';

@NgModule({
    declarations: [
        MasterDataListComponent,
        MasterDataCruComponent
    ],
    imports: [
        MasterDataListRoutingModule,
        SharedCommonModule,
    ],
    providers: [
        MasterDataListService,
        MasterDataTypeService,
    ]
})
export class MasterDataListModule { }
