import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostService } from './post.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database'
import { environment } from './../environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';



@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
   
  ],
  providers: [PostService,
    AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
