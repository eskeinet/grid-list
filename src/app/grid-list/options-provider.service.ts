import {Injectable} from '@angular/core';
import {GridOptions} from 'ag-grid-community';
import {ColDef} from 'ag-grid-community/dist/lib/entities/colDef';

@Injectable()
export class OptionsProviderService {

  constructor() {
  }

  getOptions(columnDefs: ColDef[]): GridOptions {
    return {
      columnDefs: columnDefs,
    };
  }
}
