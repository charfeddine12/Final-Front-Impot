import { TestBed } from '@angular/core/testing';

import { DeclarationImpotssService } from './declaration-impotss.service';

describe('DeclarationImpotssService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeclarationImpotssService = TestBed.get(DeclarationImpotssService);
    expect(service).toBeTruthy();
  });
});
