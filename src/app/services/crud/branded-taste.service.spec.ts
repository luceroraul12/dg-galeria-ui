import { TestBed } from '@angular/core/testing';

import { BrandedTasteService } from './branded-taste.service';

describe('BrandedTasteService', () => {
  let service: BrandedTasteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandedTasteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
