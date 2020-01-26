import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  name: string = 'Avatar';
  year: number = 2020;
  actors: Array<string> =['Actor One','Actor Two'];
  liked : boolean = true;
  constructor() { }

  ngOnInit() {
  }
  onLikeClick()
  {
    this.liked = !this.liked;
  }

}
