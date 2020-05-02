import {
  RouterTestingModule
} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { provideRoutes, Routes, RouterModule } from '@angular/router';

import { async, ComponentFixture, TestBed, } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { environment } from 'src/environments/environment'

@Component({})
class TestRouterComponent {
}
let config: Routes = [
  {
      path: '', component: TestRouterComponent
  }
];

describe('LoginComponent', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestRouterComponent,
        LoginComponent 
      ],
      imports: [ RouterTestingModule, RouterModule, HttpClientTestingModule ],
      providers: [ provideRoutes(config),
        { provide: 'API_URL', useValue: environment.apiUrl } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.system-title').innerHTML).toMatch('Procedimentos médicos');
  });

  it('should have username input', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.input').placeholder).toMatch('Login');
  });

  it('should have password input', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.input').placeholder).toMatch('Password');
  });

  it('should have login button', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.btn-login').innerHTML).toMatch('Entrar');
  });
});
