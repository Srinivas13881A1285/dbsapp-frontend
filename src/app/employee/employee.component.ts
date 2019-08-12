import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpclientService, Employee } from '../services/httpclient.service';
import { Button } from 'protractor';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {


  private employees: Employee[];

  private employeeSubscribe: any;




constructor(private _employeeService: HttpclientService) { }

deleteEmployee(id){
  this._employeeService.deleteEmployee(id)
  .subscribe(response => {
    console.log(response);
  }); 
}



  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(this.successCallBack, this.errorCallBack);
  }

  successCallBack = (posRes): any => {
    this.employees = posRes;
  }

  errorCallBack = () => {
    (err: HttpErrorResponse): any => {
      if (err.error instanceof Error) {
        console.log("Client Side Error !!!");
      } else {
        console.log("Server Side Error !!!");
      }
    }

    
  }
}
