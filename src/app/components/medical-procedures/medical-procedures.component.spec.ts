import {
  RouterTestingModule
} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { provideRoutes, Routes, RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { reducer as searchReducer } from '../../reducers/search'

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicalProceduresComponent } from './medical-procedures.component';
import { environment } from 'src/environments/environment'

@Component({})
class TestRouterComponent {
}
let config: Routes = [
  {
      path: '', component: TestRouterComponent
  }
];

describe('MedicalProceduresComponent', () => {
  let component: MedicalProceduresComponent;
  let fixture: ComponentFixture<MedicalProceduresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MedicalProceduresComponent,
        TestRouterComponent
      ],
      imports: [ RouterTestingModule,
        RouterModule,
        HttpClientTestingModule,
        StoreModule.forRoot({
          searchReducer
        }) ],
      providers: [ { provide: 'API_URL', useValue: environment.apiUrl } ]
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

  it('should have load method', () => {
    expect(component.load).toBeTruthy();
  });
  
  it('should have loadShowProcedures method', () => {
    expect(component.loadShowProcedures).toBeTruthy();
  });

  it('should have getStatus method', () => {
    expect(component.getStatus).toBeTruthy();
  });

  it('should have showDetails method', () => {
    expect(component.showDetails).toBeTruthy();
  });

  it('should have closeDetails method', () => {
    expect(component.closeDetails).toBeTruthy();
  });

  it('should have isApproved method', () => {
    expect(component.isApproved).toBeTruthy();
  });

  it('should have isDisapproved method', () => {
    expect(component.isDisapproved).toBeTruthy();
  });

  it('should have isPending method', () => {
    expect(component.isPending).toBeTruthy();
  });

  it('should have filterByApproved method', () => {
    expect(component.filterByApproved).toBeTruthy();
  });

  it('should have filterByRepproved method', () => {
    expect(component.filterByRepproved).toBeTruthy();
  });

  it('should have filterByPending method', () => {
    expect(component.filterByPending).toBeTruthy();
  });

  it('should have all method', () => {
    expect(component.all).toBeTruthy();
  });

  it('should have getApprovedTotal method', () => {
    expect(component.getApprovedTotal).toBeTruthy();
  });

  it('should have getDisapprovedTotal method', () => {
    expect(component.getDisapprovedTotal).toBeTruthy();
  });

  it('should have getPendingTotal method', () => {
    expect(component.getPendingTotal).toBeTruthy();
  });

  it('should have getTotal method', () => {
    expect(component.getTotal).toBeTruthy();
  });

  it('should have approved card', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.filter.approved').title).toMatch('Aprovados');
  });

  it('should have repproved card', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.filter.approved').title).toMatch('Aprovados');
  });

  it('should have pending card', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.filter.pending').title).toMatch('Pendentes');
  });

  it('should have total card', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.filter.all').title).toMatch('Todos');
  });

  it('should have add button', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.button > span > i')).toHaveClass('fa-plus');
  });

  it('should have Status column', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('th:nth-child(1)').innerHTML).toMatch('Status');
  });

  it('should have Procedimento column', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('th:nth-child(2)').innerHTML).toMatch('Procedimento');
  });

  it('should have Sexo column', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('th:nth-child(3)').innerHTML).toMatch('Sexo');
  });

  it('should have Idade column', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('th:nth-child(4)').innerHTML).toMatch('Idade');
  });
});
