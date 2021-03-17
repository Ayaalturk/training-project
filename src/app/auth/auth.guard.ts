import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService){}

  canActivate(){
    if(this.authService.isUserLoggedIn()){
      return true;}
      else{
        window.alert('you need login to give permission for this page');
        return false;}
    }
 
  }
  

