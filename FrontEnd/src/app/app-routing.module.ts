import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserInfoComponent } from './create-user-info/create-user-info.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { EmpScreenComponent } from './emp-screen/emp-screen.component';
import { EmpXeroxComponent } from './emp-xerox/emp-xerox.component';
import { EmpPassportComponent } from './emp-passport/emp-passport.component';
import { EmpTicketComponent } from './emp-ticket/emp-ticket.component';
import { EmpVisaComponent } from './emp-visa/emp-visa.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { MyTestPageComponent } from './my-test-page/my-test-page.component';
import { SupperAdminDashboardComponent } from './supper-admin-dashboard/supper-admin-dashboard.component';
import { SupperAdminRegComponent } from './supper-admin-reg/supper-admin-reg.component';
import { UserInfoListComponent } from './user-info-list/user-info-list.component';
import { SuperAdminReportComponent } from './super-admin-report/super-admin-report.component';
import { EmpCusSignInComponent } from './emp-cus-sign-in/emp-cus-sign-in.component';
import { EmpCusSignOutComponent } from './emp-cus-sign-out/emp-cus-sign-out.component';
import { EmpPanComponent } from './emp-pan/emp-pan.component';
import { EmpOtherComponent } from './emp-other/emp-other.component';


const routes: Routes = [
  //{ path:'logIn', component: LoginComponent },
  { path: 'test', component: MyTestPageComponent },
  // {path:'create/user', component: CreateUserInfoComponent},
  { path: 'create/:id', component: CreateUserInfoComponent },
  { path: '', redirectTo: 'create/user', pathMatch: 'full' },
  {
    path: 'emp/screen', component: EmpScreenComponent,
    children: [
      {path: 'signin', component: EmpCusSignInComponent},
      {path: 'ticket', component: EmpTicketComponent },
      { path: 'xerox', component: EmpXeroxComponent },
      { path: 'passport', component: EmpPassportComponent },
      { path: 'visa', component: EmpVisaComponent },
      { path: 'detail', component: EmpDetailComponent },
      {path: 'pan', component: EmpPanComponent},
      {path:'other', component: EmpOtherComponent},
      {path: 'signout', component: EmpCusSignOutComponent},
    ]
  },
  {
    path: 'super/admin', component: SuperAdminComponent,
    children: [
      { path: 'dashboard', component: SupperAdminDashboardComponent },
      { path: 'reg', component: SupperAdminRegComponent },
      { path: 'report', component: SuperAdminReportComponent },
      { path: 'user/:id', component: UserInfoListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
