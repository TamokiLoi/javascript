import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryCruComponent } from './category-cru/category-cru.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
    { path: '', component: CategoryListComponent },
    { path: 'new', component: CategoryCruComponent },
    { path: ':id/edit', component: CategoryCruComponent },
    { path: ':id/detail', component: CategoryCruComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule { }
