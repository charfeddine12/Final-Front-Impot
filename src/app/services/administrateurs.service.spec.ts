import { TestBed } from '@angular/core/testing';

import { AdministrateursService } from './administrateurs.service';

describe('AdministrateursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdministrateursService = TestBed.get(AdministrateursService);
    expect(service).toBeTruthy();
  });
});
