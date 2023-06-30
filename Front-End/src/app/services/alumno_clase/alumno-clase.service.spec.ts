import { TestBed } from '@angular/core/testing';

import { AlumnoClaseService } from './alumno-clase.service';

describe('AlumnoClaseService', () => {
  let service: AlumnoClaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnoClaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
