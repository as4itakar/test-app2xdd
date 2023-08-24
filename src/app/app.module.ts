import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationModule } from './modules/authorization-module/authorization.module';
import { AuthService } from './services/authService/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StoreModule } from '@ngrx/store';
import { AuthReducer } from './reducer/auth.reducer';



@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    StoreModule.forRoot({ message: AuthReducer }),
    BrowserModule,
    AuthorizationModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
