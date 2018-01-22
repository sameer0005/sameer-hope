import { TestBed, inject } from '@angular/core/testing';

import { GetrateService } from './getrate.service';

describe('GetrateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetrateService]
    });
  });

  it('should be created', inject([GetrateService], (service: GetrateService) => {
    expect(service).toBeTruthy();
  }));
});
