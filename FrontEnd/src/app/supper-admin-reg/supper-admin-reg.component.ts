import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppSettingService } from '../service/app-setting.service';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-supper-admin-reg',
  templateUrl: './supper-admin-reg.component.html',
  styleUrls: ['./supper-admin-reg.component.scss']
})
export class SupperAdminRegComponent implements OnInit {
  constructor(private setting: AppSettingService,
    private infoService: InformationService) { }
  @ViewChild('scroll', { static: true }) cardElement: ElementRef;
  @ViewChild('demomodel',{static:true}) demomodel : ElementRef;
  invoiceData : any; 
  total: number;
  id: string;
  data: any;
  test: number;
  spinner: boolean;
  searchValue: string;
  isActive: boolean;
  dataArr: any;
  
  ngOnInit() {
    this.test = 1300;
    this.id = this.setting.empId;
    const data = this.infoService.getCusInvoice();
    this.dataArr = data;
    const reducer = (accumulator, currentValue) => accumulator + currentValue.amount;
    this.invoiceData = data;
    this.total = this.invoiceData.reduce(reducer, 0);
  } 

  getId() {
    this.spinner = true;
    setTimeout(() => {
      this.spinner = false;
    }, 2000);
  }

  searchItem() {
    this.isActive = false;
    if(this.searchValue) {
      this.isActive = true;
    }
  }

  testsss() {
    if(this.searchValue) {
      this.isActive = true;
        this.invoiceData =  this.dataArr.filter((el) => {
          return el.type.includes(this.searchValue);
        });
    }
  }

}
