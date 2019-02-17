import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  dataUrl = '/api/doctor';

  getData() {
    return this.http.get(this.dataUrl);
  }

  getPatientData(id: string) {
    return this.http.get('/api/doctor/' + id);
  }

  setPatientData(id: string, item: string, value: any) {
    return this.http.post('/api/doctor/' + id + '/' + item, {
      val: value
    });
  }
}
