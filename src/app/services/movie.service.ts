import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, BehaviorSubject} from "rxjs/index";

import {Movie} from "./../model/movie.model";
import {URL_HOST} from './../utils/Setting';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  //movies: Array<Movie> = [new Movie('Avatar',2020),new Movie('Transformer',2020)];

  movies$ = new BehaviorSubject<Movie[]>([]);

  movies : Movie[] = [];

  constructor(private httpClient : HttpClient) {
    console.log('Movie service constructor');
  }
  ngOnInit()
  {
    console.log('Ng OnInit Movie Service');
  }

  loadAllMovie()
  {
    this.httpClient.get<Movie[]>(URL_HOST+"/movies")
                .subscribe(data=>{

                this.movies = data;
                this.movies$.next(data);
                console.log('Get data ',data);
              });
  }
  delete(movie:Movie) {
    this.httpClient.delete(URL_HOST + "/movies/"+movie.id).subscribe(data=> {
      console.log('Movie deleted ',data)

      this.movies = this.movies.filter(mov=>mov.id != movie.id);
      this.movies$.next(this.movies);
    });
  }
  update(movie:Movie)
  {
    this.httpClient.put(URL_HOST + "/movies/"+movie.id,movie).subscribe(data=> {
      console.log('Movie Update ',data)

      this.movies = this.movies.map(mov=>mov.id != movie.id?mov : movie);
      this.movies$.next(this.movies);

    });
  }
}
