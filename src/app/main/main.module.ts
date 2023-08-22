import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingMoodule } from './main-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductService } from '../services/productService/product.service';
import { PostsComponent } from './components/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingMoodule
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
    PostsComponent,
  ],
  providers: [
    ProductService
  ]
})
export class MainModule { }
