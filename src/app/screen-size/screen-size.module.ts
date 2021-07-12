import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmallScreenSizeDirective, XSmallAndSmallScreenSizeDirective} from "./screen-size.directive";

@NgModule({
  declarations: [SmallScreenSizeDirective, XSmallAndSmallScreenSizeDirective],
  imports: [
    CommonModule
  ],
  exports: [SmallScreenSizeDirective, XSmallAndSmallScreenSizeDirective]
})
export class ScreenSizeModule {
}
