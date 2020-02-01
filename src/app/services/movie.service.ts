import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";

import {Movie} from "./../model/movie.model";
import {URL_HOST} from './../utils/Setting';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Array<Movie> = [new Movie('Avatar',2020),new Movie('Transformer',2020)];

  constructor(private httpClient : HttpClient) { }

  getAllMovie(): Observable<any>
  {
    return this.httpClient.get(URL_HOST+"/movies");
  }
}
