import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { PatientsDoctorComponent } from './patients-doctor/patients-doctor.component';

export const doctorRoutes: Routes = [
  {path: "", component: DoctorComponent},
  {path: "patients", component: PatientsDoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(doctorRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
