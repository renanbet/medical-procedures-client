import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { CardCounterComponent } from './card-counter/card-counter.component';
import { LoginComponent } from './login/login.component';
import { MedicalProceduresComponent } from './medical-procedures/medical-procedures.component';
import { MedicalProcedureDetailsComponent } from './medical-procedures/medical-procedure-details/medical-procedure-details.component';

import { LoginService } from './services/login.service'
import { MedicalProcedureService } from './services/medical-procedure.service'

import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule
  ],
  providers: [LoginService, MedicalProcedureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
