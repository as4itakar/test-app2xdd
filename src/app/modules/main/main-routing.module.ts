import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'posts/:id', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingMoodule { }