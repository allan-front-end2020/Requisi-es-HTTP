import { TestBed } from '@angular/core/testing';

import { GhApiService } from './gh-api.service';

describe('GhApiService', () => {
  let service: GhApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
