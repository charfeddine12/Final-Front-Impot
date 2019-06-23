import { TestBed } from '@angular/core/testing';

import { LoyersService } from './loyers.service';

describe('LoyersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoyersService = TestBed.get(LoyersService);
    expect(service).toBeTruthy();
  });
});
