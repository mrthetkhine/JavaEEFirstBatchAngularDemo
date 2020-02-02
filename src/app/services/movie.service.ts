import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, BehaviorSubject} from "rxjs/index";

import {Movie} from "./../model/movie.model";
import {URL_HOST} from './../utils/Setting';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Array<Movie> = [new Movie('Avatar',2020),new Movie('Transformer',2020)];

  private movies$ = new BehaviorSubject<Movie[]>([]);

  movies : Movie[] = [];

  constructor(private httpClient : HttpClient) {
    console.log('Movie service constructor');
  }
  ngOnInit()
  {
    console.log('Ng OnInit Movie Service');
  }

  loadAllMovie(): Observable<any>
  {
    return this.httpClient.get<Movie[]>(URL_HOST+"/movies")
                .subscribe(data=>{

                this.movies = data;
                this.movies$.next(data);
                console.log('Get data ',data);
              });
  }
}
