import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppSettingService } from '../service/app-setting.service';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-super-admin-report',
  templateUrl: './super-admin-report.component.html',
  styleUrls: ['./super-admin-report.component.scss']
})

export class SuperAdminReportComponent implements OnInit {
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
  getAllDeta: any;
  
  ngOnInit() {
    this.id = this.setting.empId;
    this.getAllDetails();
  } 
  getAllDetails() {
    this.infoService.getAllService().then((res: any) => {
      this.getAllDeta = res;
      const data = this.getAllDeta;
      this.invoiceData = data;
      this.dataArr = data;
      const reducer = (accumulator, currentValue) => accumulator + currentValue.amount;
      this.total = this.invoiceData.reduce(reducer, 0);
    });
  }

  getId() {
    this.spinner = true;
    setTimeout(() => {
      this.spinner = false;
    }, 2000);
  }

  activeClass() {
    this.isActive = false;
    if(this.searchValue) {
      this.isActive = true;
    }
  }

  searchItem(event) {
    console.log(event.target.value);
    this.invoiceData = this.dataArr;
    if(this.searchValue) {
      this.isActive = true;
        this.invoiceData =  this.dataArr.filter((el) => {
          return el.customerId.includes(this.searchValue.toUpperCase());
        });
    }
  }

}
