import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppSettingService } from '../service/app-setting.service';
import { InformationService } from '../information.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-supper-admin-reg',
  templateUrl: './supper-admin-reg.component.html',
  styleUrls: ['./supper-admin-reg.component.scss']
})
export class SupperAdminRegComponent implements OnInit {
  // @ViewChild('f', { static: true }) f: any;
  @ViewChild('employee', {static: false}) employee: any;
  @ViewChild('broker',{static: false}) broker: any;
  @ViewChild('demomodel',{static:true}) demomodel : ElementRef;

  emp = {fullName: '', cellNumber: ''};
  bro = {fullName:'', cellNumber: ''};
  isTemp = [];
  isValid: boolean;
  isType : string;
  isTypeEmp : boolean;
  dateString : string;

  constructor(private localSetting: AppSettingService,
              private infoService: InformationService,
              private router: Router) { }
  
  ngOnInit() {
    this.isTypeEmp = true;
  } 

  chooseUserType(type) {
    this.isType = type;
    if(type == 'emp') {
      this.isTypeEmp = true;
    } else {
      this.isTypeEmp = false;
    }
  }

  onSubmit(type) {
    if(type == 'emp') {
      if(!this.employee.valid) {
        Swal.fire({
          icon: 'error',
          title: 'Mandatory fields must be filled!',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        this.generateToken(type,this.emp.fullName);
        Swal.fire({
          icon: 'success',
          title: 'Registered successfully!',
          showConfirmButton: false,
          timer: 1500
       })
      }
    }
    if(type == 'broker') {
      if(!this.broker.valid) {
        Swal.fire({
          icon: 'error',
          title: 'Mandatory fields must be filled!',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        this.generateToken(type,this.bro.fullName);
        Swal.fire({
          icon: 'success',
          title: 'Registered successfully!',
          showConfirmButton: false,
          timer: 1500
       })
      }
    }
  }
  generateToken(type,name) {
      let regType = (type.substring(0,3)).toUpperCase();
      let regName = name.substring(0,3);
      let modelValue = this.emp.fullName
      var today = new Date();
      var str = today.toString();
      var split = str.split(' ');
      var month = split[1];
      var date = split[2];
      var year = split[3].substring(0,2);
      var tokenSecondHalf = (regType+month+date+year+regName).toUpperCase();
      this.localSetting.brokerId = tokenSecondHalf + '02';
  }
  onSubmitsss() {
       let vlaue = this.broker.value;
       let temp = {
        customerName: vlaue.name,
        customerId: "CUSMONMAY112020PMO2",
        date: this.dateString,
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
      // this.infoService.getAdminService(temp).then(res => {
      //   console.log(res);
      // });
  }


}
