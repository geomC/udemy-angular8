import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  FIREBASE_ENDPOINT_URL = 'https://udemy-angular8-course-backend.firebaseio.com/posts.json';

  constructor(
    private http: HttpClient
  ) {
  }

  fetchposts(): Observable<Post[]> {
    return this.http.get<{ [key: string]: Post }> // set the response body type by making usage of the generic character of get
    (this.FIREBASE_ENDPOINT_URL)
      .pipe(
        map((responseData) => !responseData ? [] : Object.keys(responseData)
          // data is a nested object, we want to store it as array
            .map(internalIdKey => ({...responseData[internalIdKey], id: internalIdKey}))
        )
      );
  }

  createPost(post: Post): Observable<any> {
    // Send Http request
    return this.http
      .post(this.FIREBASE_ENDPOINT_URL, post);
  }


  deletePosts(): Observable<any>  {
    return this.http.delete(this.FIREBASE_ENDPOINT_URL);
  }
}
