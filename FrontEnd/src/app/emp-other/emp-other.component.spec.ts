import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpOtherComponent } from './emp-other.component';

describe('EmpOtherComponent', () => {
  let component: EmpOtherComponent;
  let fixture: ComponentFixture<EmpOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
