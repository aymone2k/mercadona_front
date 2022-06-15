import { TestBed } from '@angular/core/testing';

import { ParseCommandeService } from './parse-commande.service';

describe('ParseCommandeService', () => {
  let service: ParseCommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParseCommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
