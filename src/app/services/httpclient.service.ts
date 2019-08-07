import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



export class Employee{
  constructor(
    public id:number,
    public name:string,
  ) {}

}
@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private _http:HttpClient) { }

  public getEmployees():any{
    return this._http.get<Employee[]>("http://localhost:8080/api/employees/all");
  }

  public deleteEmployee(id:number){
    // console.log("service method called");
    return  this._http.delete("http://localhost:8080/api/employees/"+id);
  }

  public createEmployee(employee:Employee){
    return this._http.post("http://localhost:8080/api/employees/new",employee);
  }


}
