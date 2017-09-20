import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpperDirective } from './upper.directive';
import {MyVisibilityDirective} from "./myvisibility.directive";
import { ColorDirective } from './color.directive';
import { ColorComponent } from './color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    UpperDirective,
    MyVisibilityDirective,
    ColorDirective,
    ColorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
