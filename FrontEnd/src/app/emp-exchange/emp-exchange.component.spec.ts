import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpExchangeComponent } from './emp-exchange.component';

describe('EmpExchangeComponent', () => {
  let component: EmpExchangeComponent;
  let fixture: ComponentFixture<EmpExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
