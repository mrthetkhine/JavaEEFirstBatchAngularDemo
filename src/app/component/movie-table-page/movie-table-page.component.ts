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

  @ViewChild('mymodal',{'static':false}) editModalDlg:any;

  closeResult: string;
  modalOptions:NgbModalOptions;

  editForm:FormGroup ;

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

    this.editForm = this.formBuilder.group({
      name: ['', Validators.required],
      year: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
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

  onSubmit()
  {
    console.log('Submit form');
  }
  get f()
  {
    return this.editForm.controls;
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
