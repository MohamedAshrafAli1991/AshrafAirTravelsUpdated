import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastSubjectService {
  private dataSource = new BehaviorSubject<any>(0);
  data = this.dataSource.asObservable();

  constructor() { }

  updatedDataSelection(data){
    this.dataSource.next(data);
    }
}
