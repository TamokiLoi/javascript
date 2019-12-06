import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MasterDataTypeCruComponent } from './cru/master-data-type-cru.component';
import { MasterDataTypeListComponent } from './list/master-data-type-list.component';

const routes: Routes = [
    { path: '', component: MasterDataTypeListComponent },
    { path: 'new', component: MasterDataTypeCruComponent },
    { path: ':action/:id', component: MasterDataTypeCruComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MasterDataTypeRoutingModule { }
