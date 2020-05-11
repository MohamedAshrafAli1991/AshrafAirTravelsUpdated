import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';
import { Router } from '@angular/router';
import { AppSettingService } from '../service/app-setting.service';

@Component({
  selector: 'app-create-user-info',
  templateUrl: './create-user-info.component.html',
  styleUrls: ['./create-user-info.component.scss']
})
export class CreateUserInfoComponent implements OnInit {
  token: any;
  isError: boolean;
  isSpinner: boolean;
  isCount: boolean;
  isDisabled: boolean;
  data: any;
  today: string;

  constructor(private info: InformationService, 
              private router: Router, 
              private setting : AppSettingService) { }

 ngOnInit() {
  var today = new Date();
  var str = today.toString();
  this.setting.empId = 'CUS'+ (str.split(" ",4).join('').toUpperCase()) + 'ASH' + '2';
 }
  
  async userToken(event) {
    try {
      this.isSpinner = false;
      this.isError = false;
      const tokenTotalLength = 10;
      let userToken = event.target.value;
      userToken = userToken ? userToken.trim() : userToken;
      userToken = userToken ? userToken.toUpperCase() : userToken;
      event.target.value = userToken.replace(/[&\/\\#\s,@^!+()$~%.'":*?<>{}]/g, '');
      if(userToken && userToken.length == 10) {
        this.isSpinner = true;
        const data = await this.info.tokenInfoTable(userToken);
        console.log(data);
        if(data) {
          this.isSpinner = false;
          this.isDisabled = true;
          this.data = data;
        } else {
          this.isSpinner = false;
          this.isError = true;
          this.setTimeOut();
        }
      }
    } catch(err) {
      console.log(err);
    }
  }
  
  superAdmin() {
     //this.router.navigateByUrl('super/admin');
     this.router.navigateByUrl('emp/screen/passport');
  }

  setTimeOut() {
    setTimeout(() => {
      this.isError =false;
    }, 3000);
  }
}
