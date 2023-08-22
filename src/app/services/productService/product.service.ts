import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Post } from 'src/app/types/Post';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]>{
        return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
            catchError(() => throwError( () => new Error('Посты отсутствуют'))),
            map( (data) => <Post[]>data)
        )
    }
}
