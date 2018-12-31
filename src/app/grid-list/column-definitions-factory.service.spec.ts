import {TestBed} from '@angular/core/testing';

import {ColumnDefinitionsFactoryService} from './column-definitions-factory.service';
import {ColDef} from 'ag-grid-community/dist/lib/entities/colDef';
import {GridListModule} from './grid-list.module';

describe('ColumnDefinitionsFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [GridListModule]
  }));

  it('should be created', () => {
    const service: ColumnDefinitionsFactoryService = TestBed.get(ColumnDefinitionsFactoryService);
    expect(service).toBeTruthy();
  });

  describe('| make =>', () => {
    it('should return an array', () => {
      const service: ColumnDefinitionsFactoryService = TestBed.get(ColumnDefinitionsFactoryService);
      expect(service.make()).toEqual(jasmine.any(Array));
    });

    it('options should specify column definitions', () => {
      const service: ColumnDefinitionsFactoryService = TestBed.get(ColumnDefinitionsFactoryService);
      const columnDefinitions: ColDef[] = service.make();
      expect(columnDefinitions.length).toBeGreaterThan(0);
      columnDefinitions.forEach((columnDef: ColDef) => {
        expect(columnDef).toEqual(jasmine.any(Object));
        expect(columnDef.headerName).toBeDefined();
      });
    });
  });
});
