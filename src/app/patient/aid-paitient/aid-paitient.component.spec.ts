import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidPaitientComponent } from './aid-paitient.component';

describe('AidPaitientComponent', () => {
  let component: AidPaitientComponent;
  let fixture: ComponentFixture<AidPaitientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidPaitientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidPaitientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
