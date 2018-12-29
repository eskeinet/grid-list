import {TestBed} from '@angular/core/testing';

import {OptionsProviderService} from './options-provider.service';
import {GridListModule} from './grid-list.module';
import {GridOptions} from 'ag-grid-community';
import {ColDef} from 'ag-grid-community/dist/lib/entities/colDef';

describe('OptionsProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [GridListModule],
  }));

  it('should be created', () => {
    const service: OptionsProviderService = TestBed.get(OptionsProviderService);
    expect(service).toBeTruthy();
  });

  describe('| getOptions =>', () => {
    it('should return an object', () => {
      const service: OptionsProviderService = TestBed.get(OptionsProviderService);
      expect(service.getOptions([])).toEqual(jasmine.any(Object));
    });

    it('options should specify column definitions', () => {
      const service: OptionsProviderService = TestBed.get(OptionsProviderService);
      const colDefs = [
        {headerName: 'Make', field: 'make'},
        {headerName: 'Model', field: 'model'},
        {headerName: 'Price', field: 'price'},
      ];
      const gridOptions: GridOptions = service.getOptions(colDefs);
      expect(gridOptions.columnDefs).toBeDefined();
      expect(gridOptions.columnDefs).toEqual(jasmine.any(Array));
      expect(gridOptions.columnDefs.length).toBeGreaterThan(0);
      gridOptions.columnDefs.forEach((columnDef: ColDef) => {
        expect(columnDef).toEqual(jasmine.any(Object));
        expect(columnDef.headerName).toBeDefined();
      });
    });
  });
});
