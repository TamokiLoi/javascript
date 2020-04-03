import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserListComponent } from './list/user-list.component';
import { UserRoutingModule } from './user.routes';
import { UserService } from './user.service';

@NgModule({
    declarations: [
        UserListComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule
    ],
    providers: [UserService]
})
export class UserModule { }
