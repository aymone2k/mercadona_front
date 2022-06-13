import { TestBed } from '@angular/core/testing';

import { ServicearticleService } from './servicearticle.service';

describe('ServicearticleService', () => {
  let service: ServicearticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicearticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
