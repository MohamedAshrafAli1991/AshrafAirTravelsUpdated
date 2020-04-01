import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupperAdminRegComponent } from './supper-admin-reg.component';

describe('SupperAdminRegComponent', () => {
  let component: SupperAdminRegComponent;
  let fixture: ComponentFixture<SupperAdminRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupperAdminRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupperAdminRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
