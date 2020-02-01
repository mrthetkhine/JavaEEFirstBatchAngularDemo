export class Movie {
  name : string;
  year : number;
  liked? : boolean;

  constructor(title : string, year : number)
  {
    this.name = title;
    this.year = year;
  }

}
