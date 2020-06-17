import { TestBed } from '@angular/core/testing';

import { ToastSubjectService } from './toast-subject.service';

describe('ToastSubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastSubjectService = TestBed.get(ToastSubjectService);
    expect(service).toBeTruthy();
  });
});
