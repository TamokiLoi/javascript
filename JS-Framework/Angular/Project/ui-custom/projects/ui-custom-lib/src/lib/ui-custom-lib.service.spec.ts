import { TestBed } from '@angular/core/testing';

import { UiCustomLibService } from './ui-custom-lib.service';

describe('UiCustomLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiCustomLibService = TestBed.get(UiCustomLibService);
    expect(service).toBeTruthy();
  });
});
