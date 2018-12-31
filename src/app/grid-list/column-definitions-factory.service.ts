import {Inject, Injectable, Optional} from '@angular/core';
import {COLUMN_DEFINITIONS_TOKEN} from './column-definitions-provider.token';
import {ColDef} from 'ag-grid-community';

@Injectable()
export class ColumnDefinitionsFactoryService {

  constructor(@Inject(COLUMN_DEFINITIONS_TOKEN) private readonly colDefs: ColDef[]) {
  }

  public make(): ColDef[] {
    return this.colDefs;
  }
}
