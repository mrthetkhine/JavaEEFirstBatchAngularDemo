import { Component, OnInit,ViewChild } from '@angular/core';
import {Observable} from "rxjs/index";
import {Movie} from "../../model/movie.model";
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movie-table-page',
  templateUrl: './movie-table-page.component.html',
  styleUrls: ['./movie-table-page.component.css']
})
export class MovieTablePageComponent implements OnInit {

  moviesData ;
  movieCount = 0;

  movieSubscriber$;

  @ViewChild('mymodal',{static:true}) editModalDlg:any;

  closeResult: string;
  modalOptions:NgbModalOptions;
  constructor(private modalService: NgbModal,
              private movieService : MovieService)
  {

  }
  ngOnInit()
  {
    console.log('Loaded ');
    this.moviesData = this.movieService.movies$;
    console.log(this.moviesData);

    this.movieSubscriber$ = this.movieService.movies$.subscribe(data=>{
      console.log('New movie arrived');
      this.movieCount = data.length;
    });
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log('Modal Close');
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    console.log('Dismissed reason ',reason);
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  editMovie(movie)
  {
    console.log('Edit movie ',movie, ' modal ',this.editModalDlg);
    this.open(this.editModalDlg);
  }
  deleteMovie(movie)
  {
    console.log('Delete movie ',movie);
    this.movieService.delete(movie);
  }
  ngOnDestroy()
  {
    this.movieSubscriber$.unsubscribe();
  }

}
