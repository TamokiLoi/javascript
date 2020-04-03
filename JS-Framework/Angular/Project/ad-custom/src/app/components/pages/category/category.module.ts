import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CategoryCruComponent } from './category-cru/category-cru.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModule } from './category.routes';

@NgModule({
  declarations: [
      CategoryListComponent, 
      CategoryCruComponent
    ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
