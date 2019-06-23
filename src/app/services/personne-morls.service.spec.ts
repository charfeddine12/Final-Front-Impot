import { TestBed } from '@angular/core/testing';

import { PersonneMorlsService } from './personne-morls.service';

describe('PersonneMorlsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonneMorlsService = TestBed.get(PersonneMorlsService);
    expect(service).toBeTruthy();
  });
});
