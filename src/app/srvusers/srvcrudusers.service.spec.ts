import { TestBed } from '@angular/core/testing';

import { SrvcrudusersService } from './srvcrudusers.service';

describe('SrvcrudusersService', () => {
  let service: SrvcrudusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvcrudusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
