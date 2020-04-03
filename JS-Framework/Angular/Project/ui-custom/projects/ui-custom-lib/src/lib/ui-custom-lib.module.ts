import { NgModule } from '@angular/core';
import { UiCustomLibComponent } from './ui-custom-lib.component';
import { FooComponent } from './foo/foo.component';



@NgModule({
  imports: [],
  declarations: [
    UiCustomLibComponent,
    FooComponent],
  exports: [
    UiCustomLibComponent,
    FooComponent]
})
export class UICustomLibModule { }
