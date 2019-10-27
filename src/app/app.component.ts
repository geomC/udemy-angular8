import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostsService } from './posts.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(
    private postsService: PostsService
    ) {
  }

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.isFetching = true;
    this.postsService.createPost(postData)
      .subscribe(() => {
        this.isFetching = false;
        this.fetchPosts();
    });
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isFetching = true;
    this.postsService.fetchposts()
      .subscribe( (posts) => {
        this.loadedPosts = posts;
        this.isFetching = false;
      });
  }
}
