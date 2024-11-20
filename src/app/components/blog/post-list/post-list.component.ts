import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { AuthService } from '../../../services/auth.service';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  isLoading = false;
  error = '';
  isLoggedIn = false;

  constructor(
    private postService: PostService,
    private authService: AuthService
  ) {
    this.isLoggedIn = this.authService.isLoggedIn();
    // Add dummy posts for testing
    this.posts = [
      {
        id: '1',
        title: 'Getting Started with Angular',
        summary: 'Learn the basics of Angular framework and how to build your first application.',
        content: 'Full content here...',
        authorId: '1',
        authorName: 'John Doe',
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['Angular', 'Web Development']
      },
      {
        id: '2',
        title: 'Building a Blog with Angular',
        summary: 'Step by step guide to create a full-featured blog using Angular and modern web technologies.',
        content: 'Full content here...',
        authorId: '1',
        authorName: 'John Doe',
        createdAt: new Date(),
        updatedAt: new Date(),
        tags: ['Angular', 'Blog', 'Tutorial']
      }
    ];
  }

  ngOnInit(): void {
    // We'll implement this when we have the backend
    // this.loadPosts();
  }

  loadPosts(): void {
    this.isLoading = true;
    this.postService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
        this.isLoading = false;
      },
      error: (error) => {
        this.error = error.message || 'Failed to load posts';
        this.isLoading = false;
      }
    });
  }
}
