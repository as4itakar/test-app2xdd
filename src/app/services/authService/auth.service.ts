import { Injectable } from '@angular/core';
import {of, Observable, BehaviorSubject} from 'rxjs'
import { User } from 'src/app/types/User';
import { Store } from '@ngrx/store';
import { AuthApp } from 'src/app/types/AuthApp';

@Injectable()
export class AuthService {

  constructor(private store: Store<AuthApp>){
  }

  loadSubmit(user: User): Observable<true>{
    localStorage.setItem('user', JSON.stringify(user))
    this.submit()
    return of(true)
  }

  subscribeOnSubmit(){
    return this.store.select('message')
  }

  unSubmit(){
    this.store.dispatch({type: 'OUT'})
  }

  submit(){
    this.store.dispatch({type: 'SUBMIT'})
  }

  deleteSubmit(): Observable<true>{
    localStorage.removeItem('user')
    this.unSubmit()
    return of(true)
  }
}
