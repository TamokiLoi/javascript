import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserCruComponent } from './cru/user-cru.component';
import { UserListComponent } from './list/user-list.component';

const routes: Routes = [
    { path: '', component: UserListComponent },
    { path: 'new', component: UserCruComponent },
    { path: ':action/:id', component: UserCruComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
