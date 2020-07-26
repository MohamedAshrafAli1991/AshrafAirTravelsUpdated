import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpStampingComponent } from './emp-stamping.component';

describe('EmpStampingComponent', () => {
  let component: EmpStampingComponent;
  let fixture: ComponentFixture<EmpStampingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpStampingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpStampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
