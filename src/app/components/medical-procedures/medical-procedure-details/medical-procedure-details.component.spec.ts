import { HttpClientTestingModule } from '@angular/common/http/testing';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicalProcedureDetailsComponent } from './medical-procedure-details.component';

import { environment } from 'src/environments/environment'

import { StoreModule } from '@ngrx/store';
import { reducer as showToast } from '../../../reducers/utilities'

describe('MedicalProcedureDetailsComponent', () => {
  let component: MedicalProcedureDetailsComponent;
  let fixture: ComponentFixture<MedicalProcedureDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalProcedureDetailsComponent ],
      imports: [ HttpClientTestingModule,
        StoreModule.forRoot({
          showToast
        }) ],
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

  it('should have save method', () => {
    expect(component.save).toBeTruthy();
  });

  it('should have back method', () => {
    expect(component.back).toBeTruthy();
  });

  it('should have isAdmin method', () => {
    expect(component.isAdmin).toBeTruthy();
  });

  it('should have approve method', () => {
    expect(component.approve).toBeTruthy();
  });

  it('should have pending method', () => {
    expect(component.pending).toBeTruthy();
  });

  it('should have disapprove method', () => {
    expect(component.disapprove).toBeTruthy();
  });

  it('should have isApproved method', () => {
    expect(component.isApproved).toBeTruthy();
  });

  it('should have isRepproved method', () => {
    expect(component.isRepproved).toBeTruthy();
  });

  it('should have isPending method', () => {
    expect(component.isPending).toBeTruthy();
  });

  it('should have isNew method', () => {
    expect(component.isNew).toBeTruthy();
  });

  it('should have remove method', () => {
    expect(component.remove).toBeTruthy();
  });

  it('should have isValid method', () => {
    expect(component.isValid).toBeTruthy();
  });

  it('should have procedure input', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#procedure').placeholder).toMatch('Procedimento');
  });

  it('should have old input', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#old').placeholder).toMatch('Idade');
  });

  it('should have selecione gender', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('select > option:nth-child(1)').innerHTML).toMatch('Selecione');
  });

  it('should have Feminino gender', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('select > option:nth-child(2)').innerHTML).toMatch('Feminino');
  });

  it('should have Masculino gender', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('select > option:nth-child(3)').innerHTML).toMatch('Masculino');
  });

  it('should have back button', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#back > span > i')).toHaveClass('fa-arrow-left');
  });

  it('should have update button', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#update > span > i')).toHaveClass('fa-check');
  });

  it('should have Pendente button', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.button.is-info').innerHTML).toMatch('Pendente');
  });
});
