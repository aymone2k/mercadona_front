import { TestBed } from '@angular/core/testing';

import { SrvcartService } from './srvcart.service';

describe('SrvcartService', () => {
  let service: SrvcartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvcartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
