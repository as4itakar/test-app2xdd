import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingMoodule } from './main-routing.module';
import { PostsService } from 'src/app/services/postsService/posts.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostService } from 'src/app/services/postService/post.service';
import { LoadBarComponent } from './components/load-bar/load-bar.component';


@NgModule({
  imports: [
    CommonModule,
    MainRoutingMoodule
  ],
  declarations: [
    MainComponent,
    PostsComponent,
    PostComponent,
    LoadBarComponent
  ],
  providers: [
    PostsService,
    PostService
  ]
})
export class MainModule { }
