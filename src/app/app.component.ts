import { Component } from '@angular/core';
import {Movie} from "./model/movie.model";
import {MovieService} from "./services/movie.service";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  movies : Array<Movie>;

  constructor(private movieService : MovieService)
  {

  }
  ngOnInit()
  {
    console.log('Loaded ');
    this.movieService.loadAllMovie();
  }
  movieLikeChanged(movie:Movie)
  {
    console.log('Movie like changed ',movie);
  }
}
