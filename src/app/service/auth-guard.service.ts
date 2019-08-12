import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router:Router,private authService:AuthenticationService) { }

  canActivate(){
    if(this.authService.isUserLoggedIn()){
      return true;
    }else{
      this.router.navigate['login'];
      return false;
    }
  }
}
