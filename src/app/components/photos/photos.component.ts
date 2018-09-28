import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"]
})
export class PhotosComponent implements OnInit {
  API_URL = "https://jsonplaceholder.typicode.com/photos";
  photos;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.http.get(this.API_URL).subscribe(data => {
      this.photos = data;
    });
  }
}
