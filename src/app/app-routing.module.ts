import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './Authorization/Authorization.component';
import { AuthGuard } from './guards/auth.guard';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', loadChildren: () => import('./main/main.module').then(m => m.MainModule), canActivate: [AuthGuard]},
  {path: 'auth', component: AuthorizationComponent, pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
