import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalProcedureComponent } from './medical-procedure.component';

describe('MedicalProcedureComponent', () => {
  let component: MedicalProcedureComponent;
  let fixture: ComponentFixture<MedicalProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalProcedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
