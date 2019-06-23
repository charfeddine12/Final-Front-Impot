import { TestBed } from '@angular/core/testing';

import { ContribuableService } from './contribuable.service';

describe('ContribuableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContribuableService = TestBed.get(ContribuableService);
    expect(service).toBeTruthy();
  });
});
