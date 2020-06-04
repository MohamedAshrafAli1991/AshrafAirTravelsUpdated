import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCusSignInComponent } from './emp-cus-sign-in.component';

describe('EmpCusSignInComponent', () => {
  let component: EmpCusSignInComponent;
  let fixture: ComponentFixture<EmpCusSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpCusSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpCusSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
