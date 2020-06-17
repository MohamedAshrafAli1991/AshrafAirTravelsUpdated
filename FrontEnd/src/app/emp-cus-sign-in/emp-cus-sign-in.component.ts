import { Component, OnInit, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__ } from '@angular/core';
import Swal from 'sweetalert2'
import { AppSettingService } from '../service/app-setting.service';

@Component({
  selector: 'app-emp-cus-sign-in',
  templateUrl: './emp-cus-sign-in.component.html',
  styleUrls: ['./emp-cus-sign-in.component.scss']
})
export class EmpCusSignInComponent implements OnInit {
  newCustomer : boolean;
  existingCustomer : boolean;
  cusType : any;
  token: any;
  mobileNumber: any;
  customerName: any;
  customerMobileNumber: number;

  constructor( private localSetting : AppSettingService) { }

  ngOnInit() {
    this.token = 'CUS123456789';
  }

  chooseUserType(customerType) {
    this.newCustomer = false;
    if(customerType == 'new') {
      this.newCustomer = true;
    }
  }

  signIn(cusType) {
    if(cusType == 'new') {
      this.customerMobileNumber;
      let customerName = this.customerName.toUpperCase();
      var today = new Date();
      var str = today.toString();
      this.localSetting.cusId = 'CUS'+ (str.split(" ",4).join('').toUpperCase()) + customerName + '02';
      const cusId = localStorage.getItem('cusId');
      Swal.fire({
        icon: 'success',
        title: 'Registered Sucessfully!',
        text: cusId,
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      alert(cusType);
    }
  }

  sweetAlert (val) {
    if (val == 'success') {
      Swal.fire({
         //position: 'top-end',
         icon: 'success',
         title: 'save sucessfully!',
         text: "Registered Sucessfully!",
         showConfirmButton: false,
         timer: 1500
      })
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'please check your input value(s)!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

}
