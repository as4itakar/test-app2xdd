import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/services/postsService/posts.service';
import { Post } from 'src/app/types/Post';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

  postsSub: Subscription

  posts: Post[]

  constructor(private productService: PostsService) { }

  ngOnInit() {
    this.postsSub = this.productService.getPosts().subscribe(
      (data) => this.posts = data
    )
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe()
  }

}
