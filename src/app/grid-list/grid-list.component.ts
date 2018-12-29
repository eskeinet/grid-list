import {Component, Input, OnInit} from '@angular/core';

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

  @Input('appColumnDefs')
  public columnDefs;

  @Input('appRowData')
  public rowData ;

  constructor() {
  }

  public ngOnInit() {
  }

}
