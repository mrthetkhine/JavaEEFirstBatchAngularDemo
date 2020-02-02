import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieListPageComponent} from "./component/movie-list-page/movie-list-page.component";


const routes: Routes = [
  { path: 'movie_list', component: MovieListPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
