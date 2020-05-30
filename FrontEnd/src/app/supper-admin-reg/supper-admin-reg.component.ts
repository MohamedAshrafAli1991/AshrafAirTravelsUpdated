import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppSettingService } from '../service/app-setting.service';
import { InformationService } from '../information.service';
import { getLocaleDateFormat } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supper-admin-reg',
  templateUrl: './supper-admin-reg.component.html',
  styleUrls: ['./supper-admin-reg.component.scss']
})
export class SupperAdminRegComponent implements OnInit {
  @ViewChild('f', { static: true }) f: any;
  @ViewChild('demomodel',{static:true}) demomodel : ElementRef;
  cus = {cell:'',role:'customer',name:'',amount:''};
  isValid: boolean;

  constructor(private setting: AppSettingService,
    private infoService: InformationService,
    private router: Router) { }
  
  ngOnInit() {
  } 
  
  pay() {
    this.router.navigateByUrl('test');
  }
  onSubmit() {
    // if(this.f.valid) {
    //   const el: HTMLElement = this.demomodel.nativeElement as HTMLElement;
    //   el.click();
    // }
    // let temp = {
    //   customerName:"Parama",
    //   customerId: "CUSMONMAY112020PMO2",
    //   date: "2020-01-02",
    //   type:"pan",
    //   amount: 1000,
    //   expense: 500,
    //   profit: 300,
    //   percentage: 100,
    //   status: "approved",
    //   tsActive:true,
    //   role:"customer",
    //   phone:"9566340416",
    //   document:"valid"
    //}
    if(this.f.valid) {
      let dateObj  = new Date();
      let month = dateObj.getUTCMonth() + 1; //months from 1-12
      let day = dateObj.getUTCDate();
      let year = dateObj.getUTCFullYear();
      let dateString = year + '-' + month + '-' + day;

       //console.log(dateString);
       let vlaue = this.f.value;
       let temp = {
        customerName: vlaue.name,
        customerId: "CUSMONMAY112020PMO2",
        date: dateString,
        type:"pan",
        amount: vlaue.amount,
        expense: 500,
        profit: 300,
        percentage: 100,
        status: "approved",
        tsActive:true,
        role: vlaue.role,
        phone: vlaue.cell,
        document:"valid"
      }
      console.log(temp);
      this.infoService.getAdminService(temp).then(res => {
        console.log(res);
      });
    }
  }


}
