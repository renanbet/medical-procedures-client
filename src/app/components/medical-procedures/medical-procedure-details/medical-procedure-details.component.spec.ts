import { HttpClientTestingModule } from '@angular/common/http/testing';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicalProcedureDetailsComponent } from './medical-procedure-details.component';

import { environment } from 'src/environments/environment'

describe('MedicalProcedureDetailsComponent', () => {
  let component: MedicalProcedureDetailsComponent;
  let fixture: ComponentFixture<MedicalProcedureDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalProcedureDetailsComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ { provide: 'API_URL', useValue: environment.apiUrl } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalProcedureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
