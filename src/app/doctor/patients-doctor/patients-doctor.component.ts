import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-patients-doctor',
  templateUrl: './patients-doctor.component.html',
  styleUrls: ['./patients-doctor.component.scss']
})
export class PatientsDoctorComponent implements OnInit {
  patient: object;

  constructor(doctorService: DoctorService) {
    doctorService.getPatientData("5c69078777e58837349e515f").subscribe((data: object) => this.patient = {...data});

    doctorService.setPatientData("5c69078777e58837349e515f", "medication", [{name: "Summedicin", dose: "2/day"}]);
  }

  ngOnInit() {
  }

}
