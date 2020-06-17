import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastSubjectService } from '../service/toast-subject.service';

@Component({
  selector: 'app-emp-passport',
  templateUrl: './emp-passport.component.html',
  styleUrls: ['./emp-passport.component.scss']
})
export class EmpPassportComponent implements OnInit {

cus = {cell:'',gender:'male',firstName:'',lastName:'',dob:'',motherName:'',mrg:'single',policeStation:'',streetName:'',postAndTaluk:'',district:'',pincode:'',passportType:'fresh'};
isValid: boolean;
isError: boolean;
@ViewChild('f',{static:true}) f: any;
@ViewChild('demomodel',{static:true}) demomodel : ElementRef;

// @Input('name') name: string;
  constructor( private router: Router, private subject: ToastSubjectService) { }
  
  ngOnInit() {
  }

  numberValidate(event) {
    let data = event.target.value;
    if(data) {
      data = data.replace(/[^0-9]+/g, '');  
    }
     event.target.value = data;
  }
  savePassport() {
    const el: HTMLElement = this.demomodel.nativeElement as HTMLElement;
      el.click();
    const data = {
      name : this.cus.firstName
    }
    console.log(this.cus.firstName);
    if(this.f.valid) {
      const el: HTMLElement = this.demomodel.nativeElement as HTMLElement;
      el.click();
    }
  }

  text() {
    alert('Test');
    this.subject.updatedDataSelection(0);
  }
}
