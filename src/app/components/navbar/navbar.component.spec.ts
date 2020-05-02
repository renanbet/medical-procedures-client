import {
  RouterTestingModule
} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { provideRoutes, Routes, RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { reducer as searchReducer } from 'src/app/ngrx'

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

@Component({})
class TestRouterComponent {
}
let config: Routes = [
  {
      path: '', component: TestRouterComponent
  }
];

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent,
        TestRouterComponent
      ],
      imports: [ 
        RouterTestingModule,
        RouterModule,
        HttpClientTestingModule,
        StoreModule.forRoot({
          searchReducer
        }) ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
