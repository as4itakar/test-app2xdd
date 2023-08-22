import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingMoodule } from './main-routing.module';
import { ProductService } from '../services/productService/product.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingMoodule
  ],
  declarations: [
    MainComponent,
    PostsComponent,
    PostComponent
  ],
  providers: [
    ProductService
  ]
})
export class MainModule { }
