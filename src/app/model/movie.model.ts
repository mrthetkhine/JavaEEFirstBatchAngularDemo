export class Movie {
  title : string;
  year : number;
  liked? : boolean;

  constructor(title : string, year : number)
  {
    this.title = title;
    this.year = year;
  }

}
