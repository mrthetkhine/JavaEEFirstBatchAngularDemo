import {Component, OnInit, Input, EventEmitter,Output} from '@angular/core';
import {Movie} from "../../model/movie.model";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie : Movie;
  @Output() likeChanged = new EventEmitter<Movie>();

  actors: Array<string> =['Actor One','Actor Two'];

  constructor() { }

  ngOnInit() {
    console.log('Movie input ',this.movie);
  }
  onLikeClick()
  {
    this.movie.liked = !this.movie.liked;
    this.likeChanged.emit(this.movie);
  }

}
