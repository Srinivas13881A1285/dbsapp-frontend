import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './service/auth-guard.service';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  
  
  {
    path: "employee", component: EmployeeComponent,canActivate:[AuthGuardService]
  },
  {
    path: "addemployee", component: AddEmployeeComponent,canActivate:[AuthGuardService]
  },
  
  {
    path: "login", component: LoginComponent
  },

   {
    path: "logout", component: LogoutComponent,canActivate:[AuthGuardService]
  }  ,
  {
    path: "", component: EmployeeComponent,canActivate:[AuthGuardService]
  },
  {
    path:"fileupload",component:FileUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
