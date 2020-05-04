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

  it('should have getHeaders method', () => {
    expect(service.getHeaders).toBeTruthy();
  });

  it('should have getProcedures method', () => {
    expect(service.getProcedures).toBeTruthy();
  });

  it('should have insert method', () => {
    expect(service.insert).toBeTruthy();
  });

  it('should have update method', () => {
    expect(service.update).toBeTruthy();
  });

  it('should have remove method', () => {
    expect(service.remove).toBeTruthy();
  });

  it('should have error method', () => {
    expect(service.error).toBeTruthy();
  });
});
