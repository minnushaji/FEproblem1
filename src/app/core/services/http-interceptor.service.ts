import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

 
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // Request Interceptor
    if (sessionStorage.getItem('authToken')) {
      var token = sessionStorage.getItem('token')
      req = req.clone({
        setHeaders: {
          'token': token,
          'Content-Type': 'application/json'
        }
      });
    } else {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Response Interceptor
    return next.handle(req);

  }


}


