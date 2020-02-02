import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './component/movie/movie.component';
import { MovieListPageComponent } from './component/movie-list-page/movie-list-page.component';
import { MovieTablePageComponent } from './component/movie-table-page/movie-table-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieListPageComponent,
    MovieTablePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
