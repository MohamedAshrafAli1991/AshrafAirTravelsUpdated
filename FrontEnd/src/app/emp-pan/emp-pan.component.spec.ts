import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPanComponent } from './emp-pan.component';

describe('EmpPanComponent', () => {
  let component: EmpPanComponent;
  let fixture: ComponentFixture<EmpPanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpPanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpPanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
