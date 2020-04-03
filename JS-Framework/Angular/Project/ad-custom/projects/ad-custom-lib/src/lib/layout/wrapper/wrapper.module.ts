import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WrapperComponent } from './wrapper.component';

@NgModule({
  imports: [CommonModule],
  exports: [WrapperComponent],
  declarations: [WrapperComponent]
})
export class WrapperModule { }
