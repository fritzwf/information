import { TestBed } from '@angular/core/testing';

import { NinjaApiService } from './ninja-api.service';

describe('NinjaApiService', () => {
  let service: NinjaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NinjaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
