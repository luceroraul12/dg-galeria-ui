import { TestBed } from '@angular/core/testing';

import { SaborAsociadoService } from './sabor-asociado.service';

describe('SaborAsociadoService', () => {
  let service: SaborAsociadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaborAsociadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
