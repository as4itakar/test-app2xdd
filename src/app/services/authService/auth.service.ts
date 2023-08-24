import { Injectable } from '@angular/core';
import {of, Observable, BehaviorSubject} from 'rxjs'
import { User } from 'src/app/types/User';
import { Store } from '@ngrx/store';
import { AuthApp } from 'src/app/types/AuthApp';

@Injectable()
export class AuthService {

  subMap: Map<boolean, string> 

  constructor(private store: Store<AuthApp>){
    this.subMap = new Map([[true, 'SUBMIT'], [false, 'OUT'] ])
    this.checkSubmit()
  }

  loadSubmit(user: User): Observable<true>{
    localStorage.setItem('user', JSON.stringify(user))
    this.checkSubmit()
    return of(true)
  }

  subscribeOnSubmit(){
    return this.store.select('message')
  }

  checkSubmit(){
    const type: string = <string>this.subMap.get(localStorage.getItem('user') != null)
    this.store.dispatch({type})
  }

  deleteSubmit(): Observable<true>{
    localStorage.removeItem('user')
    this.checkSubmit()
    return of(true)
  }
}
