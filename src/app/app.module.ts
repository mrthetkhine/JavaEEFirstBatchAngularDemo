import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './component/movie/movie.component';
import { MovieListPageComponent } from './component/movie-list-page/movie-list-page.component';
import { MovieTablePageComponent } from './component/movie-table-page/movie-table-page.component';
import { LoginPipe } from './pages/login.pipe';
import { LoginComponent } from './pages/login/login.component';
import {TokenInterceptorService} from "./services/token-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieListPageComponent,
    MovieTablePageComponent,
    LoginPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
