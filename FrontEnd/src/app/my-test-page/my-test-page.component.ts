import { Component, OnInit } from '@angular/core';
import { AppSettingService } from '../service/app-setting.service';
import { InformationService } from '../information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-test-page',
  templateUrl: './my-test-page.component.html',
  styleUrls: ['./my-test-page.component.scss']
})
export class MyTestPageComponent implements OnInit {

  constructor(
    private setting: AppSettingService,
    private infoService: InformationService,
    private router: Router
  ) { }
    
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

  

 


}
