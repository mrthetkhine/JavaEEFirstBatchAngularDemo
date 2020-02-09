///<reference path="../../../../node_modules/@angular/forms/forms.d.ts"/>
import { Component, OnInit,ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

import {MovieService} from "../../services/movie.service";
import {Observable} from "rxjs/index";
import {Movie} from "../../model/movie.model";
@Component({
  selector: 'app-movie-table-page',
  templateUrl: './movie-table-page.component.html',
  styleUrls: ['./movie-table-page.component.css']
})
export class MovieTablePageComponent implements OnInit {

  moviesData ;
  movieCount = 0;

  movieSubscriber$;

  @ViewChild('mymodal',{'static':true}) movieModalDlg:any;

  closeResult: string;
  modalOptions:NgbModalOptions;

  editModalDialog:any;
  movieForm:FormGroup ;

  constructor(private formBuilder: FormBuilder,
              private modalService: NgbModal,
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

    this.movieForm = this.formBuilder.group({
      id : [],
      name: ['', Validators.required],
      year: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    });
  }
  open(content) {
    this.editModalDialog = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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


  get f()
  {
    return this.movieForm.controls;
  }
  newMovie()
  {
    this.open(this.movieModalDlg);
  }
  editMovie(movie)
  {
    console.log('Edit movie ',movie, ' modal ',this.movieModalDlg);
    let data = {... movie};
    this.movieForm.patchValue(data);
    this.open(this.movieModalDlg);
  }
  onSubmit()
  {
    var model = this.movieForm.value;

    console.log('On Submit ',model.id);

    if( model.id ) { //Thre is id, so update
      this.movieService.update(model);
    }
    else
    {
      this.movieService.create(model);
    }
    this.movieForm.reset();
    this.modalService.dismissAll();
    console.log('Submit form ', model);

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
