import { Injectable } from '@angular/core';
import {Movie} from "./../model/movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Array<Movie> = [new Movie('Avatar',2020),new Movie('Transformer',2020)];
  constructor() { }

  getAllMovie()
  {
    return this.movies;
  }
}
