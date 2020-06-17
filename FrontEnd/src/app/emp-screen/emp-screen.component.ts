import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastSubjectService } from '../service/toast-subject.service';

@Component({
  selector: 'app-emp-screen',
  templateUrl: './emp-screen.component.html',
  styleUrls: ['./emp-screen.component.scss']
})
export class EmpScreenComponent implements OnInit {
  @ViewChild('toastCount',{ static : false}) toastel : ElementRef ;
  isToastActive: boolean;
  toastCount: number;

  constructor(private subject: ToastSubjectService) { }

  ngOnInit() {
    this.toastCount = 5;
     //const el : HTMLElement = this.toastel.nativeElement as HTMLElement;
      //el.click(); 
      //this.toastel.nativeElement.value = this.toastCount;
    this.subject.data.subscribe(value => { 
      this.enableToastMsg();
      setTimeout(() => {
        this.disableToastMsg();
      }, 50000);
      this.toastCount = this.toastCount + 1
    });
    this.isToastActive = false;
  }

  selectedElement() {
    const navbar: any = document.querySelectorAll('#sidebar')[0];
    const navbarOffset = navbar.offsetTop || 0;
    const lineElement: any =  document.querySelectorAll('.line-vertical')[0];
    setTimeout(() => {
      const el: any = document.querySelectorAll('#sidebar ul > .active');
      let postion = el[0].offsetTop || 0;
      postion = postion  - navbarOffset + 5;
      console.log(postion);
      lineElement.style.top =   postion + 'px';
    }, 100);
  }

  enableToastMsg() {
    this.isToastActive = true;
    console.log(this.isToastActive);
  }

  disableToastMsg() {
    this.isToastActive = false;
  }

}
