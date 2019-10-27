import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface Post {
  title: string;
  content: string;
  id?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];

  FIREBASE_ENDPOINT_URL = 'https://udemy-angular8-course-backend.firebaseio.com/posts.json';

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http
      .post(this.FIREBASE_ENDPOINT_URL, postData)
      // if no subscription is configured, no request is sent
      .subscribe(responseData => { // ng extracts the response data if not configured otherwose
        this.fetchPosts();
      });
    // no unsubscribe in component teardown necessary since the observable is baked-in in N
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http.get<{[key: string]: Post}> // set the response body type by making usage of the generic character of get
    (this.FIREBASE_ENDPOINT_URL)
      .pipe(
        map( (responseData) => Object.keys(responseData)
          // data is a nested object, we want to store it as array
            .map(internalIdKey => ({ ...responseData[internalIdKey], id: internalIdKey}))
        )
      )
      .subscribe( (posts) => {
        console.log(posts);
        this.loadedPosts = posts;
      });
  }
}
