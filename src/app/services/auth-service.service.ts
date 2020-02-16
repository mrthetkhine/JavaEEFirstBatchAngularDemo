import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {URL_HOST} from "../utils/Setting";
import {Movie} from "../model/movie.model";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isLoggedIn: boolean = false;
  token : string ;
  constructor(private httpClient : HttpClient) { }

  login(model)
  {
    return this.httpClient.post( "http://localhost:8080/login",model)

  }
  setLogin(flag,token)
  {
    this.isLoggedIn = flag;
    this.token = token;
  }
}
