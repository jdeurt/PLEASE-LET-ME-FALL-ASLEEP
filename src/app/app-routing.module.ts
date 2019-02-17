import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { patientRoutes } from './patient/patient-routing.module';
import { LoginComponent } from './login/login.component';
import { doctorRoutes } from './doctor/doctor-routing.module';
import { providerRoutes } from './provider/provider-routing.module';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "patient", children: patientRoutes},
  {path: "doctor", children: doctorRoutes},
  {path: "provider", children: providerRoutes}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
