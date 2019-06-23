import { TestBed } from '@angular/core/testing';

import { ImpotsSocietesService } from './impots-societes.service';

describe('ImpotsSocietesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImpotsSocietesService = TestBed.get(ImpotsSocietesService);
    expect(service).toBeTruthy();
  });
});
