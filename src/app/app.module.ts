import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialsModule } from './materials/materials.module';
import { EmployeeComponent } from './employee/employee.component';
import { HttpclientService } from './services/httpclient.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BasicAuthHtppInterceptorServiceService } from './services/basic-auth-htpp-interceptor-service.service';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {FileSelectDirective, FileDropDirective} from "ng2-file-upload";
import { MultiFileUploadComponent } from './multi-file-upload/multi-file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    FileUploadComponent,
    FileSelectDirective,
    MultiFileUploadComponent,
    FileDropDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:BasicAuthHtppInterceptorServiceService,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
