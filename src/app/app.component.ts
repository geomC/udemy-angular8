import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post('https://udemy-angular8-course-backend.firebaseio.com/posts.json', postData)
      // if no subscription is configured, no request is sent
      .subscribe(responseData => { // ng extracts the response data if not configured otherwose
        console.log(responseData);
      });
      // no unsubscribe in component teardown necessary since the observable is baked-in in N
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }

}
