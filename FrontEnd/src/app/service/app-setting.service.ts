import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppSettingService {

  constructor() { }

  get empId(): string { return localStorage.getItem('empId'); }
  set empId(val: string) { localStorage.setItem('empId', val); }

  get brokerId(): string { return localStorage.getItem('brokerID');}
  set brokerId(val : string) { localStorage.setItem('brokerId', val);}

  get cusId(): string { return localStorage.get('cusId');}
  set cusId(val: string) {localStorage.setItem('cusId', val);}
}
