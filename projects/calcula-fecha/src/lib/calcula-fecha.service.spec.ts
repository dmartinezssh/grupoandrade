import { TestBed } from '@angular/core/testing';

import { CalculaFechaService } from './calcula-fecha.service';

describe('CalculaFechaService', () => {
  let service: CalculaFechaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculaFechaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
