import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/authService/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-Authorization',
  templateUrl: './Authorization.component.html',
  styleUrls: ['./Authorization.component.scss']
})
export class AuthorizationComponent implements OnInit, OnDestroy {

  fg: FormGroup

  logineSub: Subscription

  logined: boolean

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.fg = new FormGroup({
      "userName": new FormControl("", Validators.required),
      "password": new FormControl("", [Validators.required, Validators.pattern("[0-9]{2,}")])
    })

    this.logineSub = this.authService.subscribeOnSubmit().subscribe(
      (data) => this.logined = data
    )
    
    if(this.logined){
      this.router.navigate([''])
    }
  }

  ngOnDestroy(): void {
    this.logineSub.unsubscribe()
  }

  submit(){
    const name = this.fg.controls['userName'].value
    const password = this.fg.controls['password'].value
    this.authService.loadSubmit({name, password}).subscribe( () => this.router.navigate(['/posts']))
  }
}
