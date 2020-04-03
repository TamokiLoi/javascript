import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCruComponent } from './product-cru/product-cru.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
    {path: '',component: ProductListComponent },
    {path: 'new',component: ProductCruComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
