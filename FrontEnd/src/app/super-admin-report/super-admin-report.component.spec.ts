import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminReportComponent } from './super-admin-report.component';

describe('SuperAdminReportComponent', () => {
  let component: SuperAdminReportComponent;
  let fixture: ComponentFixture<SuperAdminReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
