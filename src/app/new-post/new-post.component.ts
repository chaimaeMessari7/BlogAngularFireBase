import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {


  p: Post;

  constructor(private service: PostService,
    private router: Router) { }

  ngOnInit() {
  }
  //Methode for add a Post

  add(titre: string, contenu: string, form: NgForm) {
    this.p = new Post();
    this.p.postTitle = titre;
    this.p.postContent = contenu;
    this.p.postCreatedAt=new Date();
    this.service.createNewPost(this.p);
    form.reset();
    this.router.navigate(['/posts']);
    
  }
}
