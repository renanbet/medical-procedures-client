import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { MedicalProceduresComponent } from './medical-procedures/medical-procedures.component';
import { CardCounterComponent } from './card-counter/card-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MedicalProceduresComponent,
    CardCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
