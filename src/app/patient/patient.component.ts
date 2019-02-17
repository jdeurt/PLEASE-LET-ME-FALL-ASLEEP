import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  data: object;

  constructor(patientService: PatientService) {
    patientService.getData().subscribe((data: object) => this.data = {...data});
  }

  ngOnInit() {
  }

}
