import { TestBed } from '@angular/core/testing';

import { MedicalProcedureService } from './medical-procedure.service';

describe('MedicalProcedureService', () => {
  let service: MedicalProcedureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalProcedureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
