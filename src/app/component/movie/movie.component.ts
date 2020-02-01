import {Component, OnInit, Input, EventEmitter,Output} from '@angular/core';
import {Movie} from "../../model/movie.model";
import {LoggerService} from "../../services/logger.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie : Movie;
  @Output() likeChanged = new EventEmitter<Movie>();

  actors: Array<string> =['Actor One','Actor Two'];

  constructor(private loggerService: LoggerService) {
    console.log('Movie constructor run');
  }
  ngOnChanges()
  {
    console.log("ngOnChanges run");
  }
  ngOnInit() {
    console.log('Movie ngOnit ',this.movie);
  }
  ngDoCheck()
  {
    console.log('Run ngDoCheck ');
  }
  ngAfterContentInit()
  {
    console.log('Run ngAfterContentInit ');
  }
  onLikeClick()
  {
    this.movie.liked = !this.movie.liked;
    this.likeChanged.emit(this.movie);
    this.loggerService.log('Movie like Clicked');
  }

}
