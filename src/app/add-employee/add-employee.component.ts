import { Component, OnInit } from '@angular/core';
import { Employee, HttpclientService } from '../services/httpclient.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  user:Employee = new Employee("","","","");



  constructor(private _httpClientService: HttpclientService) { }


  ngOnInit() {
  }

  createEmployee(): any {
    this._httpClientService.createEmployee(this.user).
                            subscribe(
                                        data => alert("Employee Created Successfully")
                                    );
  }

}
