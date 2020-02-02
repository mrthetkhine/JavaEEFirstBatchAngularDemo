import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.css']
})
export class MovieListPageComponent implements OnInit {

  moviesData : Observable<Movie>;
  constructor(private movieService : MovieService) { }

  ngOnInit() {
    this.moviesData = this.movieService.getAllMovie();
  }

}
