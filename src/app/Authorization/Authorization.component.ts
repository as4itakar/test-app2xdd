import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../services/authService/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-Authorization',
  templateUrl: './Authorization.component.html',
  styleUrls: ['./Authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  fg: FormGroup

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.fg = new FormGroup({
      "userName": new FormControl("", Validators.required),
      "password": new FormControl("", [Validators.required, Validators.pattern("[0-9]{2,}")])
    })

    if(this.authService.checkSubmit()){
      this.router.navigate([''])
    }
  }

  submit(){
    const name = this.fg.controls['userName'].value
    const password = this.fg.controls['password'].value
    this.authService.loadSubmit({name, password}).subscribe( () => this.router.navigate(['']))
  }
}
