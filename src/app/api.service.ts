import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Check https://jsonplaceholder.typicode.com/guide.html for api info
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public constructor(private httpClient: HttpClient) {
  }

  public getPosts(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
