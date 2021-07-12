import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ScreenSizeModule} from "./screen-size/screen-size.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ScreenSizeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
