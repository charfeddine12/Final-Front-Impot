import { TestBed } from '@angular/core/testing';

import { DeclarationExistencesService } from './declaration-existences.service';

describe('DeclarationExistencesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeclarationExistencesService = TestBed.get(DeclarationExistencesService);
    expect(service).toBeTruthy();
  });
});
