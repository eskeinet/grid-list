import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridListComponent } from './grid-list.component';
import {AgGridModule} from 'ag-grid-angular';
import {DefaultOptionsFactoryService} from './default-options-factory.service';
import {COLUMN_DEFINITIONS_TOKEN} from './column-definitions-provider.token';

@NgModule({
  declarations: [GridListComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
  ],
  exports: [GridListComponent],
  providers: [
    DefaultOptionsFactoryService,
    {
      provide: COLUMN_DEFINITIONS_TOKEN,
      useValue: [
        {headerName: 'Make', field: 'make'},
        {headerName: 'Model', field: 'model'},
        {headerName: 'Price', field: 'price'},
      ],
    },
  ]
})
export class GridListModule { }
