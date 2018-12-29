import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  template: `
    <p>
      grid-list works!
    </p>
    <ag-grid-angular
      style="width: 500px; height: 500px;"
      class="ag-theme-balham"
      [rowData]="rowData"
      [columnDefs]="columnDefs"
    >
    </ag-grid-angular>
  `,
  styles: []
})
export class GridListComponent implements OnInit {
  public columnDefs = [
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
  ];

  public rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  constructor() { }

  public ngOnInit() {
  }

}
