import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserInfoComponent } from './create-user-info/create-user-info.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { EmpScreenComponent } from './emp-screen/emp-screen.component';
import { EmpXeroxComponent } from './emp-xerox/emp-xerox.component';
import { EmpPassportComponent } from './emp-passport/emp-passport.component';
import { EmpTicketComponent } from './emp-ticket/emp-ticket.component';
import { EmpVisaComponent } from './emp-visa/emp-visa.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { MyTestPageComponent } from './my-test-page/my-test-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SupperAdminDashboardComponent } from './supper-admin-dashboard/supper-admin-dashboard.component';
import { SupperAdminRegComponent } from './supper-admin-reg/supper-admin-reg.component';
import { UserInfoListComponent } from './user-info-list/user-info-list.component';
import { CounterSinppetDirective } from './directive/counter-sinppet.directive';
import { SuperAdminReportComponent } from './super-admin-report/super-admin-report.component';
import { EmpCusSignInComponent } from './emp-cus-sign-in/emp-cus-sign-in.component';
import { EmpCusSignOutComponent } from './emp-cus-sign-out/emp-cus-sign-out.component';
import { EmpPanComponent } from './emp-pan/emp-pan.component';
import { EmpOtherComponent } from './emp-other/emp-other.component';
import { EmpExchangeComponent } from './emp-exchange/emp-exchange.component';
import { EmpStampingComponent } from './emp-stamping/emp-stamping.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserInfoComponent,
    SuperAdminComponent,
    EmpScreenComponent,
    EmpXeroxComponent,
    EmpPassportComponent,
    EmpTicketComponent,
    EmpVisaComponent,
    EmpDetailComponent,
    MyTestPageComponent,
    SupperAdminDashboardComponent,
    SupperAdminRegComponent,
    UserInfoListComponent,
    CounterSinppetDirective,
    SuperAdminReportComponent,
    EmpCusSignInComponent,
    EmpCusSignOutComponent,
    EmpPanComponent,
    EmpOtherComponent,
    EmpExchangeComponent,
    EmpStampingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
