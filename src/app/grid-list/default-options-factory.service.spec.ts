import {TestBed} from '@angular/core/testing';

import {DefaultOptionsFactoryService} from './default-options-factory.service';
import {GridListModule} from './grid-list.module';
import {GridOptions} from 'ag-grid-community';

describe('DefaultOptionsFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [GridListModule],
  }));

  it('should be created', () => {
    const service: DefaultOptionsFactoryService = TestBed.get(DefaultOptionsFactoryService);
    expect(service).toBeTruthy();
  });

  describe('| make =>', () => {
    it('should return an object', () => {
      const service: DefaultOptionsFactoryService = TestBed.get(DefaultOptionsFactoryService);
      expect(service.make()).toEqual(jasmine.any(Object));
    });

    it('options should specify column definitions', () => {
      const service: DefaultOptionsFactoryService = TestBed.get(DefaultOptionsFactoryService);
      const gridOptions: GridOptions = service.make();
      expect(gridOptions.columnDefs).toBeDefined();
      expect(gridOptions.columnDefs).toEqual(jasmine.any(Array));
      expect(gridOptions.columnDefs.length).toBeGreaterThan(0);
    });
  });
});
