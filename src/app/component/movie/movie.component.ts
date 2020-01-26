import { Component, OnInit,Input } from '@angular/core';
import {Movie} from "../../model/movie.model";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie : Movie;

  actors: Array<string> =['Actor One','Actor Two'];
  liked : boolean = true;
  constructor() { }

  ngOnInit() {
    console.log('Movie input ',this.movie);
  }
  onLikeClick()
  {
    this.liked = !this.liked;
  }

}
