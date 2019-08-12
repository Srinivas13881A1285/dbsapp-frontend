import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User {
  constructor(public status: string) { }
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http: HttpClient) { }

  // authenticate(username, password) {
  //   console.log(username);
  //   console.log(password);
  //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  //   return this._http.get<User>("http://localhost:8080/api/employees/validateLogin", { headers }).pipe(
  //     map(
  //       userData => {
  //         sessionStorage.setItem('username', username);
  //         let authString = 'Basic '+btoa(username+':'+password);
  //         sessionStorage.setItem('basicauth', authString);
  //         return userData;
  //       }
  //     )
  //   )
  // }
  authenticate(username:string, password:string) {
    return this._http.post<any>('http://localhost:8080/authenticate',{username,password}).pipe(
     map(
       userData => {
        console.log(userData.jwtToken);
        sessionStorage.setItem('username',username);
        let tokenStr= 'Bearer '+userData.jwtToken;
        sessionStorage.setItem('jwtToken', tokenStr);
        return userData;
       }
     )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    if (user === null) return false;
    else return true;
  }

  logOut() {
    sessionStorage.removeItem('username');
   // sessionStorage.removeItem('token');
  }
}
