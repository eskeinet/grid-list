import {Injectable} from '@angular/core';
import {GridOptions} from 'ag-grid-community';

@Injectable()
export class OptionsProviderService {

  constructor() {
  }

  getOptions(): GridOptions {
    return {};
  }
}
