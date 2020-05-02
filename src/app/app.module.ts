import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardCounterComponent } from './components/card-counter/card-counter.component';
import { LoginComponent } from './components/login/login.component';
import { MedicalProceduresComponent } from './components/medical-procedures/medical-procedures.component';
import { MedicalProcedureDetailsComponent } from './components/medical-procedures/medical-procedure-details/medical-procedure-details.component';

import { LoginService } from './services/login.service'
import { MedicalProcedureService } from './services/medical-procedure.service'

import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { reducer as searchReducer } from './ngrx'

import { environment } from 'src/environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MedicalProceduresComponent,
    CardCounterComponent,
    LoginComponent,
    MedicalProcedureDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot({
      searchReducer
    })
  ],
  providers: [LoginService, MedicalProcedureService,
  { provide: 'API_URL', useValue: environment.apiUrl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
