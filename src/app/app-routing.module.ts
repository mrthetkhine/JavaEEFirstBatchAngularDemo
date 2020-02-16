import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieListPageComponent} from "./component/movie-list-page/movie-list-page.component";
import {MovieTablePageComponent} from "./component/movie-table-page/movie-table-page.component";
import {LoginComponent} from "./pages/login/login.component";
import {AuthServiceService} from "./services/auth-service.service";
import {AuthGuardService} from "./services/auth-guard.service";


const routes: Routes = [
  { path: 'movie_list', component: MovieListPageComponent,
    canActivate: [AuthGuardService]
  },
  { path: 'movie_table', component: MovieTablePageComponent },
   {path:'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
