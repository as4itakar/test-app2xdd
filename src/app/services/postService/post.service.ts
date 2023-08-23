import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, map, retry } from 'rxjs/operators';
import { Post } from 'src/app/types/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

constructor(private http: HttpClient) { }

  getPost(id: number): Observable<Post>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id).pipe(
      retry(2),
      catchError(
        () => throwError( () => new Error('Пост не доступен'))
      ),
      map( (data) => <Post>data ),
      delay(1000)
    )
  }
}
