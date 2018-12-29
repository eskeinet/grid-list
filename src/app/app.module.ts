import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GridListModule} from './grid-list/grid-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
