import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-emp-visa',
  templateUrl: './emp-visa.component.html',
  styleUrls: ['./emp-visa.component.scss']
})
export class EmpVisaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  viewDeatils() {
    Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'Please fill all the field(s)',
        showConfirmButton: false,
        timer: 1500
      })
  }
}
