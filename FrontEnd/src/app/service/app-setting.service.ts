import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppSettingService {

  constructor() { }

  get empId(): string { return localStorage.getItem('empId'); }
  set empId(val: string) { localStorage.setItem('empId', val); }
}
