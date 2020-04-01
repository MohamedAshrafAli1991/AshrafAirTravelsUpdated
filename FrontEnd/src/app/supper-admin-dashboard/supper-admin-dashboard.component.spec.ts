import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupperAdminDashboardComponent } from './supper-admin-dashboard.component';

describe('SupperAdminDashboardComponent', () => {
  let component: SupperAdminDashboardComponent;
  let fixture: ComponentFixture<SupperAdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupperAdminDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupperAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
