import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCusSignOutComponent } from './emp-cus-sign-out.component';

describe('EmpCusSignOutComponent', () => {
  let component: EmpCusSignOutComponent;
  let fixture: ComponentFixture<EmpCusSignOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpCusSignOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpCusSignOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
