import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../interfaces/post';
@Injectable({
  providedIn: 'root'
})
export class BlogsService {

 apiUrl = `http://localhost:3000/posts`;
  constructor(private http: HttpClient) {}
 
  getBlogPosts() {
   
    return this.http.get<IPost[]>(this.apiUrl);
  }
}
