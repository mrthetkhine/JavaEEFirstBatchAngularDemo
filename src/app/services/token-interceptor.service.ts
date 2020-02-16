import { Injectable } from '@angular/core';
import {AuthServiceService} from "./auth-service.service";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private authServiceService: AuthServiceService) {

  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('Run interceptor ', this.authServiceService.token);
    if(this.authServiceService.token)
    {
      request = request.clone({
        setHeaders: {
          'Access-Control-Allow-Origin':'*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.authServiceService.token}`
        }
      });
    }
    else
    {
      request = request.clone({
        setHeaders: {
          'Access-Control-Allow-Origin':'*',
          'Content-Type': 'application/json',

        }
      });
    }

    return next.handle(request);
  }
}
