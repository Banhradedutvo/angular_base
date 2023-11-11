import { Component } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';
import { IPost } from 'src/app/interfaces/post';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  blogPosts: IPost[] = [];

  constructor(private blogService: BlogsService) {
    this.blogService.getBlogPosts()
    .subscribe(data => {
     
      this.blogPosts = data;
    });
  }

 

}
