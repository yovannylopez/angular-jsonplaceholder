import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostsComponent } from "./components/posts/posts.component";
import { PhotosComponent } from "./components/photos/photos.component";

const routes: Routes = [
  {
    path: "posts",
    component: PostsComponent
  },
  {
    path: "photos",
    component: PhotosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
