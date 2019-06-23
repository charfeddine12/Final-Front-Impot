import { TestBed } from '@angular/core/testing';

import { PersonnePhyzsService } from './personne-phyzs.service';

describe('PersonnePhyzsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonnePhyzsService = TestBed.get(PersonnePhyzsService);
    expect(service).toBeTruthy();
  });
});
