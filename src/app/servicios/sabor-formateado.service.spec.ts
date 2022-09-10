import { TestBed } from '@angular/core/testing';

import { SaborFormateadoService } from './sabor-formateado.service';

describe('SaborFormateadoService', () => {
  let service: SaborFormateadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaborFormateadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
