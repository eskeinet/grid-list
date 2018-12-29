import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridListComponent } from './grid-list.component';
import {AgGridModule} from 'ag-grid-angular';

@NgModule({
  declarations: [GridListComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
  ],
  exports: [GridListComponent],
})
export class GridListModule { }
