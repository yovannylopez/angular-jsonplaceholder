import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  API_URL = "https://jsonplaceholder.typicode.com/posts";
  posts;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.http.get(this.API_URL).subscribe(data => {
      this.posts = data;
    });
  }
}
