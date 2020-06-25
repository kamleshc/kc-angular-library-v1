import { TestBed } from '@angular/core/testing';

import { StarLibraryService } from './star-library.service';

describe('StarLibraryService', () => {
  let service: StarLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
