import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';

import { MedicalProcedureService } from './medical-procedure.service';
import { environment } from 'src/environments/environment'

describe('MedicalProcedureService', () => {
  let service: MedicalProcedureService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ { provide: 'API_URL', useValue: environment.apiUrl } ]
    });
    service = TestBed.inject(MedicalProcedureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
