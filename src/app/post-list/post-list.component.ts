import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  subscriptionpost: Subscription;
  constructor(private service: PostService) {

  }

  onLoveIts(post: Post) {
    if (post.postLoveIts != null)
      post.postLoveIts++;
    else
      post.postLoveIts = 1;
  }

  onNotLoveIts(post: Post) {
    if (post.postLoveIts != null)
      post.postLoveIts--;

    else
      post.postLoveIts = 1;
  }
  ngOnInit() {
    
    this.subscriptionpost = this.service.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.service.emitPosts();
    this.service.getPosts();
  }
  onDeletepost(post: Post) {
    this.service.removePost(post);
  }
  ngOnDestroy() {
    this.subscriptionpost.unsubscribe();
  }
}


