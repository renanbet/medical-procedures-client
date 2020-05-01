import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicalProceduresComponent } from './medical-procedures.component';

describe('MedicalProceduresComponent', () => {
  let component: MedicalProceduresComponent;
  let fixture: ComponentFixture<MedicalProceduresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalProceduresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
