import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';


  constructor(private router: Router) {

  }

  newpost() {
    this.router.navigate(['new']);
  }
  post() {
    this.router.navigate(['posts']);
  }

}
