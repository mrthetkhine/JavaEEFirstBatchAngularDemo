import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthServiceService} from "../../services/auth-service.service";
import {Router} from "@angular/router";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup ;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private movieService: MovieService,
              private authServiceService: AuthServiceService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }
  get f()
  {
    return this.loginForm.controls;
  }
  onSubmit()
  {
    var model = this.loginForm.value;
    console.log('Name ',model);
    this.authServiceService.login(model).subscribe((data:any)=>{
      console.log('Data login ',data);
      if(data.token)
      {
        this.authServiceService.setLogin(true, data.token);
        this.movieService.loadAllMovie();
        this.router.navigateByUrl('/');
      }
    });;

  }
}
