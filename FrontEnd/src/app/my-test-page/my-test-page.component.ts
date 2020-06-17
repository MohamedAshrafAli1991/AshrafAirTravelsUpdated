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

  isToastActive: boolean = false;

  constructor(
    private setting: AppSettingService,
    private infoService: InformationService,
    private router: Router
  ) { }
    
  
  ngOnInit() {
  }

  test() {
    this.isToastActive = true;
  }


}
