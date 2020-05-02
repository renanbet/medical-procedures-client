import {
  RouterTestingModule
} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { provideRoutes, Routes, RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { reducer as searchReducer } from 'src/app/ngrx'

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
});
