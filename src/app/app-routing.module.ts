import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MedicalProceduresComponent } from './medical-procedures/medical-procedures.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'procedures', component: MedicalProceduresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
