import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { NavbarPatientComponent } from './patient/navbar-patient/navbar-patient.component';
import { MedicationPatientComponent } from './patient/medication-patient/medication-patient.component';
import { AppointmentsPatientComponent } from './patient/appointments-patient/appointments-patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ProviderComponent } from './provider/provider.component';
import { NavbarProviderComponent } from './provider/navbar-provider/navbar-provider.component';
import { NavbarDoctorComponent } from './doctor/navbar-doctor/navbar-doctor.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientsDoctorComponent } from './doctor/patients-doctor/patients-doctor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AidPaitientComponent } from './patient/aid-paitient/aid-paitient.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    PatientComponent,
    NavbarPatientComponent,
    MedicationPatientComponent,
    AppointmentsPatientComponent,
    DoctorComponent,
    ProviderComponent,
    NavbarProviderComponent,
    NavbarDoctorComponent,
    PatientsDoctorComponent,
    AidPaitientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
