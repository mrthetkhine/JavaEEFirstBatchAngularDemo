export class Movie {
  id:string;
  name : string;
  year : number;
  liked? : boolean;

  constructor(title : string, year : number)
  {
    this.name = title;
    this.year = year;
  }

}
