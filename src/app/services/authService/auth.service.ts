import { Injectable } from '@angular/core';
import {of, Observable} from 'rxjs'
import { User } from 'src/app/types/User';

@Injectable()
export class AuthService {

  loadSubmit(user: User){
    localStorage.setItem('user', JSON.stringify(user))
    return of(true)
  }

  checkSubmit(){
    return localStorage.getItem('user') != null
  }
}
