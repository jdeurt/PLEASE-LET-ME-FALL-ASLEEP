import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';

type DoctorData = {
  _type: "doctor";
  email: string;
  password: string;

  profile: {
    name: string,
    gender: string,
    age: number
  },

  access: Array<string>
};

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  data: DoctorData

  constructor(doctorService: DoctorService) {
    doctorService.getData().subscribe((data: DoctorData) => this.data = {...data});
  }

  ngOnInit() {
  }

}
