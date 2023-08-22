import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  submitSub: Subscription

  logineSub: Subscription

  logined: boolean

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.changeLogedState()
  }

  ngOnDestroy() {
    this.submitSub.unsubscribe()
    this.logineSub.unsubscribe()
  }

  unlogin(){
    this.authService.deleteSubmit().subscribe(
      () => this.router.navigate(['auth'])
    )
  }

  changeLogedState(){
    this.logineSub = this.authService.subscribeOnSubmit().subscribe(
      (data) => this.logined = data
    )
  }

}
