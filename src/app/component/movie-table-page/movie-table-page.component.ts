import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/index";
import {Movie} from "../../model/movie.model";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movie-table-page',
  templateUrl: './movie-table-page.component.html',
  styleUrls: ['./movie-table-page.component.css']
})
export class MovieTablePageComponent implements OnInit {

  moviesData : Observable<Movie>;
  movieCount = 0;

  movieSubscriber$;
  constructor(private movieService : MovieService)
  {

  }
  ngOnInit()
  {
    console.log('Loaded ');
    this.moviesData = this.movieService.movies$;
    console.log(this.moviesData);

    this.movieSubscriber$ = this.movieService.movies$.subscribe(data=>{
      console.log('New movie arrived');
      this.movieCount = data.length;
    });
  }
  ngOnDestroy()
  {
    this.movieSubscriber$.unsubscribe();
  }

}