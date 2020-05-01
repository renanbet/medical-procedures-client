import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalProcedureDetailsComponent } from './medical-procedure-details.component';

describe('MedicalProcedureDetailsComponent', () => {
  let component: MedicalProcedureDetailsComponent;
  let fixture: ComponentFixture<MedicalProcedureDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalProcedureDetailsComponent ]
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
