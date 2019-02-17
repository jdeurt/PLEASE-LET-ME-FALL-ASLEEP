import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient.component';
import { MedicationPatientComponent } from './medication-patient/medication-patient.component';
import { AppointmentsPatientComponent } from './appointments-patient/appointments-patient.component';
import { AidPaitientComponent } from './aid-paitient/aid-paitient.component';

export const patientRoutes: Routes = [
  {path: "", component: PatientComponent},
  {path: "medication", component: MedicationPatientComponent},
  {path: "appointments", component: AppointmentsPatientComponent},
  {path: "aid", component: AidPaitientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(patientRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
