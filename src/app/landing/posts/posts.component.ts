import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 posts: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/posts")
      .subscribe(
        data=>{ this.displayPost(data)
        },
        error=>{
          console.log(error)
        }
        );
    
  }
 displayPost(data: Object){
   this.posts=data;
 }
}
