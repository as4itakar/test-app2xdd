import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  submitSub: Subscription

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  unlogin(){
    this.authService.deleteSubmit().subscribe(
      () => this.router.navigate(['auth'])
    )
  }

}
