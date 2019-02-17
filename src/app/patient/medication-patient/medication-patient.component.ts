import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

type PatientData = {
  _type: "patient";
  email: string;
  password: string;

  profile: {
    name: string,
    address: string,
    gender: string,
    age: number,

    medicalHistory: { [key: string]: { date: Date, medication: Array<string>, labs: Array<{ data: object }>, symptoms: Array<string> } },
    medication: { [key: string]: { name: string, dose: string, timeframe: { start: Date, end: Date } } },
    appointments: Array<{ date: Date, description: string }>

    ssn: string
  }
};

@Component({
  selector: 'app-medication-patient',
  templateUrl: './medication-patient.component.html',
  styleUrls: ['./medication-patient.component.scss']
})
export class MedicationPatientComponent implements OnInit {
  data: PatientData;
  medications: Array<{name: string, dose: string, timeframe: {start: Date, end: Date}}>;

  constructor(patientService: PatientService) {
    patientService.getData().subscribe((data: PatientData) => {
      this.data = {...data};
    });
  }

  formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  ngOnInit() {
  }

}
