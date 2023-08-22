import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './Authorization/Authorization.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule), canActivate: [AuthGuard]},
  {path: 'auth', component: AuthorizationComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
