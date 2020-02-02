import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../model/movie.model";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.css']
})
export class MovieListPageComponent implements OnInit {

  moviesData :any;
  constructor(private movieService : MovieService) { }

  ngOnInit() {
    this.moviesData = this.movieService.movies$;
  }

}
