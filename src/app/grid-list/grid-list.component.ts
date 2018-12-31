import {Component, Input, OnInit} from '@angular/core';
import {DefaultOptionsFactoryService} from './default-options-factory.service';
import {GridOptions} from 'ag-grid-community';

@Component({
  selector: 'app-grid-list',
  template: `
    <p>
      grid-list works!
    </p>
    <ag-grid-angular
      style="width: 500px; height: 500px;"
      class="ag-theme-balham"
      [rowData]="rowData | async"
      [gridOptions]="gridOptions"
    >
    </ag-grid-angular>
  `,
  styles: []
})
export class GridListComponent implements OnInit {

  @Input('appRowData')
  public rowData: Promise<any>;

  public gridOptions: GridOptions;

  constructor(
    private readonly gridOptionsProvider: DefaultOptionsFactoryService,
  ) {
  }

  public ngOnInit() {
    this.gridOptions = this.gridOptionsProvider.make();
  }

}
