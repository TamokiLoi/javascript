import { SharedCommonModule } from 'src/app/common/';
import { NgModule } from '@angular/core';

import { UserCruComponent } from './cru/user-cru.component';
import { UserListComponent } from './list/user-list.component';
import { UserRoutingModule } from './user.routes';
import { UserService } from './user.service';

@NgModule({
    declarations: [
        UserListComponent,
        UserCruComponent
    ],
    imports: [
        UserRoutingModule,
        SharedCommonModule,
    ],
    providers: [
        UserService
    ]
})
export class UserModule { }
