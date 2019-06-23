import { TestBed } from '@angular/core/testing';

import { ImpotsRPPsService } from './impots-rpps.service';

describe('ImpotsRPPsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImpotsRPPsService = TestBed.get(ImpotsRPPsService);
    expect(service).toBeTruthy();
  });
});
