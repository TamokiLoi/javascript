import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { LoginComponent } from './login/login.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { ProjectComponent } from './project/project.component';


const routes: Routes = [
    {
        path: 'admin',
        component: ProjectComponent,
        children: [
            { path: 'list', component: ProjectListComponent, canActivate: [AdminGuard] },
            { path: 'create', component: ProjectCreateComponent, canActivate: [AdminGuard] },
            { path: 'list', component: ProjectUpdateComponent, canActivate: [AdminGuard] },
            { path: 'login', component: LoginComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
