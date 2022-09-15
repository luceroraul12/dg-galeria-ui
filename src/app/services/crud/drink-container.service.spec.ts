import { TestBed } from '@angular/core/testing';

import { DrinkContainerService } from './drink-container.service';

describe('DrinkContainerService', () => {
  let service: DrinkContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
