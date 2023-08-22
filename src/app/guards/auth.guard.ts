import {Injectable} from '@angular/core';
import { AuthService } from '../services/authService/auth.service';
import { CanActivate, Router } from '@angular/router';
 

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  
  canActivate(){
    let subState
    const sub = this.authService.subscribeOnSubmit().subscribe(
      (data) => subState = data 
    )
    if(subState){
        return true
    }
    this.router.navigate(['auth'])
    return false
  }
};