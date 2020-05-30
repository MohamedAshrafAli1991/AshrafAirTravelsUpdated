import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  constructor( private http : HttpClient) { }
  invoiceData: any;
  tokenInfoTable(token) {
    return this.http.get(`${environment.baseUrl}/api/user/${token}`).toPromise();
  }

  getAdminCusInvoice () {
    this.invoiceData = [
      {customerName:"Salim", date: "01-Jan", type:"Passport", amount:1400, expense:1200, profit:600, percentege: 56, status:"Processing"},
      {customerName:"Mohamed Ashraf ALi", date: "12-Jan", type:"Ticket", amount:1200, expense:1200, profit:650, percentege: 51},
      {customerName:"Rahul", date: "25-Jan", type:"Visa", amount:6000, expense:1200, profit:680, percentege: 90},
      {customerName:"Salim", date: "01-Jan", type:"Passport", amount:1400, expense:1200, profit:400, percentege: 10, status:"documentPending"},
      {customerName:"Babu", date: "12-Jan", type:"Ticket", amount:1200, expense:1200, profit:500, percentege: 7},
      {customerName:"Rahul", date: "25-Jan", type:"Visa", amount:6000, expense:1200, profit:1300, percentege: 20},
      {customerName:"Salim", date: "01-Jan", type:"Passport", amount:1400, expense:1200, profit:3100, percentege: 40},
      {customerName:"Mohamed Ashraf ALi", date: "12-Jan", type:"Ticket", amount:1200, expense:1200, profit:1800, percentege: 49},
      {customerName:"Rahul", date: "25-Jan", type:"Visa", amount:1200, expense:1200, profit:0, percentege: 0},
      {customerName:"Salim", date: "01-Jan", type:"Passport", amount:1400, expense:1200, profit:1000, percentege: 56},
      {customerName:"Mohamed Ashraf ALi", date: "12-Jan", type:"Ticket", amount:1200, expense:1200, profit:1600, percentege: 51},
      {customerName:"Rahul", date: "25-Jan", type:"Visa", amount:6000, expense:1200, profit:3810, percentege: 90},
      {customerName:"Salim", date: "01-Jan", type:"Passport", amount:1400, expense:1200, profit:4010, percentege: 10},
      {customerName:"Mohamed Ashraf ALi", date: "12-Jan", type:"Ticket", amount:1200, expense:1200, profit:0, percentege: 0},
      {customerName:"Rahul", date: "25-Jan", type:"Visa", amount:6000, expense:1200, profit:100, percentege: 20},
      {customerName:"Salim", date: "01-Jan", type:"Passport", amount:1400, expense:1200, profit:300, percentege: 40},
      {customerName:"Mohamed Ashraf ALi", date: "12-Jan", type:"Ticket", amount:1200, expense:1200, profit:800, percentege: 49},
      {customerName:"Rahul", date: "25-Jan", type:"Visa", amount:1200, expense:1200, profit:700, percentege: 80}
    ];
    return this.invoiceData;
  }

  getAdminService (requestBody) {
      return this.http.post(`${environment.baseUrl}/api/testData`,requestBody).toPromise();
  }
  getAllService () {
    return this.http.get(`${environment.baseUrl}/api/testData`).toPromise();
}
}
