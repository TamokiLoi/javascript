import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCruComponent } from './product-cru/product-cru.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product.routes';

@NgModule({
  declarations: [ProductListComponent, ProductCruComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
