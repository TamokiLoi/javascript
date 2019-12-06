import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MasterDataCruComponent } from './cru/master-data-cru.component';
import { MasterDataListComponent } from './list/master-data-list.component';

const routes: Routes = [
    { path: '', component: MasterDataListComponent },
    { path: 'new', component: MasterDataCruComponent },
    { path: ':action/:mdType/:mdCode', component: MasterDataCruComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MasterDataListRoutingModule { }
