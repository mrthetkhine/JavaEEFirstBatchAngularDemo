import { Component } from '@angular/core';
import {Movie} from "./model/movie.model";
import {MovieService} from "./services/movie.service";
import {Observable} from "rxjs/index";
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  movies : Array<Movie>;

  closeResult: string;
  modalOptions:NgbModalOptions;

  constructor(private modalService: NgbModal,
              private movieService : MovieService)
  {
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
  }
  ngOnInit()
  {
    console.log('Loaded ');
    this.movieService.loadAllMovie();
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
  movieLikeChanged(movie:Movie)
  {
    console.log('Movie like changed ',movie);
  }
}
