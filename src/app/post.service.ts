import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { DataSnapshot } from '@angular/fire/database/interfaces';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private db: AngularFireDatabase) {

  }
  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  emitPosts() {
    this.postsSubject.next(this.posts);
  }
  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      });
  }
  savePost() {
    firebase.database().ref('/posts').set(this.posts);
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePost();
    this.emitPosts();
  }

  removePost(post: Post) {
    if (confirm('Are sure you want to delete this post ?')) {
      const postIndexToRemove = this.posts.findIndex(
        (postel) => {
          if (postel === post) {
            return true;
          }
        }
      );
      this.posts.splice(postIndexToRemove, 1);
      this.savePost();
      this.emitPosts();
    }
  }
}
