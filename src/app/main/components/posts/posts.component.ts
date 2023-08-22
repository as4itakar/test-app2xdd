import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/productService/product.service';
import { Post } from 'src/app/types/Post';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postsSub: Subscription

  posts: Post[]

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.postsSub = this.productService.getPosts().subscribe(
      (data) => this.posts = data
    )
  }

}
