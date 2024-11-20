import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/posts');
  }

  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(`/api/posts/${id}`);
  }

  createPost(post: Omit<Post, 'id' | 'authorId' | 'authorName' | 'createdAt' | 'updatedAt'>): Observable<Post> {
    return this.http.post<Post>('/api/posts', post);
  }

  updatePost(id: string, post: Partial<Post>): Observable<Post> {
    return this.http.patch<Post>(`/api/posts/${id}`, post);
  }

  deletePost(id: string): Observable<void> {
    return this.http.delete<void>(`/api/posts/${id}`);
  }
}
