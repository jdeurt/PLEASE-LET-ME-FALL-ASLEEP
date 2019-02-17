import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationPatientComponent } from './medication-patient.component';

describe('MedicationPatientComponent', () => {
  let component: MedicationPatientComponent;
  let fixture: ComponentFixture<MedicationPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
