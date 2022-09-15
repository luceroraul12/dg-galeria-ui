import { TestBed } from '@angular/core/testing';

import { DrinkContaineredTasteService } from './drink-containered-taste.service';

describe('DrinkContaineredTasteService', () => {
  let service: DrinkContaineredTasteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkContaineredTasteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
