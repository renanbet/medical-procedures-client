import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MedicalProceduresComponent } from './components/medical-procedures/medical-procedures.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'procedimentos', component: MedicalProceduresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
