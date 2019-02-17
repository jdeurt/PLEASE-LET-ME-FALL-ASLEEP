import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  dataUrl = '/api/patient';

  getData() {
    return this.http.get(this.dataUrl);
  }
}
