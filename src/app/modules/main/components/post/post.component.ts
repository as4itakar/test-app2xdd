import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostService } from 'src/app/services/postService/post.service';
import { Post } from 'src/app/types/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  id: number

  idSub: Subscription

  postSub: Subscription

  post: Post

  constructor(private activateRoute: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.subOnId()

    this.subOnPost()
  }

  ngOnDestroy() {
    this.postSub.unsubscribe()
    this.idSub.unsubscribe()
  }

  subOnPost(){
    this.postSub = this.postService.getPost(this.id).subscribe(
      (data) => this.post = data
    )
  }

  subOnId(){
    this.idSub = this.activateRoute.params.subscribe(
      (params) => this.id = params['id']
    )
  }

}
