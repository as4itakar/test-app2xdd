import { Injectable } from '@angular/core';
import {of, Observable, BehaviorSubject} from 'rxjs'
import { User } from 'src/app/types/User';

@Injectable()
export class AuthService {

  submitSubject: BehaviorSubject<boolean>

  constructor(){
    this.submitSubject = new BehaviorSubject(localStorage.getItem('user') !== null)
  }

  loadSubmit(user: User): Observable<true>{
    localStorage.setItem('user', JSON.stringify(user))
    this.checkSubmit()
    return of(true)
  }

  subscribeOnSubmit(){
    return this.submitSubject
  }

  checkSubmit(){
    this.submitSubject.next(localStorage.getItem('user') !== null)
  }

  deleteSubmit(): Observable<true>{
    localStorage.removeItem('user')
    this.checkSubmit()
    return of(true)
  }
}
