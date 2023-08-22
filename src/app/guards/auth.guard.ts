import {Injectable} from '@angular/core';
import { AuthService } from '../services/authService/auth.service';
import { CanActivate, Router } from '@angular/router';
 

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  
  canActivate(){
    const subState = this.authService.checkSubmit()
    if(subState){
        return true
    }
    this.router.navigate(['auth'])
    return false
  }
};