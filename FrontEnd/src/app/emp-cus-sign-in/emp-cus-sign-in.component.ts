import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-emp-cus-sign-in',
  templateUrl: './emp-cus-sign-in.component.html',
  styleUrls: ['./emp-cus-sign-in.component.scss']
})
export class EmpCusSignInComponent implements OnInit {
  newCustomer : boolean;
  existingCustomer : boolean;

  constructor() { }

  ngOnInit() {
  }

  chooseUserType(customerType) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    this.newCustomer = false;
    if(customerType == 'new') {
      this.newCustomer = true;
    }
  }

  signIn() {
    
  }

}
