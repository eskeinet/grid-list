import {TestBed} from '@angular/core/testing';

import {OptionsProviderService} from './options-provider.service';
import {GridListModule} from './grid-list.module';

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
      expect(service.getOptions()).toEqual(jasmine.any(Object));
    });
  });
});
