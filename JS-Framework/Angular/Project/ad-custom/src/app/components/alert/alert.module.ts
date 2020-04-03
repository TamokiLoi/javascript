import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertRoutingModule } from './alert.routes';



@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    AlertRoutingModule
  ]
})
export class AlertModule { }
