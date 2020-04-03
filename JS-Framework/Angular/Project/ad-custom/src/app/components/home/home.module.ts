import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import { DropdownModule, TabsModule, BoxModule } from 'ad-custom-lib';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DropdownModule,
    TabsModule,
    BoxModule
  ]
})
export class HomeModule { }
