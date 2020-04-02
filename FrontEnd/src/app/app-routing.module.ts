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


const routes: Routes = [
  //{ path:'logIn', component: LoginComponent },
  { path:'test', component: MyTestPageComponent },
  // {path:'create/user', component: CreateUserInfoComponent},
  {path:'create/:id', component: CreateUserInfoComponent},
  {path:'', redirectTo:'create/user',pathMatch:'full'},
  {path:'emp/screen', component: EmpScreenComponent, 
  children: [
    {path: 'xerox', component: EmpXeroxComponent},
    {path: 'passport', component: EmpPassportComponent},
    {path: 'ticket', component: EmpTicketComponent},
    {path: 'visa', component: EmpVisaComponent},
    {path: 'detail', component: EmpDetailComponent}
  ]},
  {path: 'super/admin', component: SuperAdminComponent,
  children : [
    {path: 'dashboard', component: SupperAdminDashboardComponent},
    {path: 'reg', component: SupperAdminRegComponent},
    {path: 'user/:id', component: UserInfoListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
