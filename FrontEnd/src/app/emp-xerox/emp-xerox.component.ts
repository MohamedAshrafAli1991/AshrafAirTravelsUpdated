import { Component, OnInit, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__, ViewChild } from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-xerox',
  templateUrl: './emp-xerox.component.html',
  styleUrls: ['./emp-xerox.component.scss']
})
export class EmpXeroxComponent implements OnInit {
  emp = {newXeroxCount:'', oldXeroxCount: ''};
  xeroxCount: any;
  oldXeroxCount: any;
  @ViewChild('f',{static:true}) f: any;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }
  saveXerox() {
    if(!this.f.valid) {
      // Swal.fire({
      //   position: 'top',
      //   icon: 'warning',
      //   title: 'Please fill all the field(s)',
      //   showConfirmButton: false,
      //   timer: 1500
      //})
    } else {
      Swal.fire({
        title: 'Xerox count(s) save sucessfully!',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#2d655d',
        cancelButtonColor: 'gray',
        confirmButtonText: 'Done'
        }).then((result) => {
          if (result.value) {
            this.router.navigateByUrl('super/admin');
          }
        });
    }
  }
}
