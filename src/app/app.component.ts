import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;

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
      }, this.handleError.bind(this));
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    this.isFetching = true;
    this.postsService.deletePosts()
      .subscribe(() => {
        this.isFetching = false;
        this.fetchPosts();
      }, this.handleError.bind(this));
  }

  private fetchPosts() {
    this.isFetching = true;
    this.postsService.fetchposts()
      .subscribe((posts) => {
        this.loadedPosts = posts;
        this.isFetching = false;
      }, this.handleError.bind(this));
  }

  private handleError(error: HttpErrorResponse) {
    this.error = {
      401: 'Post konnte nicht gespeichert werden'
    }[error.status] || 'Technischer Fehler';
  }
}
