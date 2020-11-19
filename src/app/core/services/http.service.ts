import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  endpoint = 'https://findfalcone.herokuapp.com'
  errorMsg: string;

  constructor(
    private http: HttpClient,
  ) { }

  getRequest(reqUrl: string, params?: any): Observable<any> {
    var endpoint = this.endpoint + '/' + reqUrl
    return this.http.get(endpoint, { 'params': params })
      .pipe(
        catchError(error => {
          let errorMsg: string;
          if (error.error instanceof ErrorEvent) {
            this.errorMsg = `Error: ${error.error.message}`;
          } else {
            this.errorMsg = this.getServerErrorMessage(error);
          }

          return throwError(errorMsg);
        })
      );
  }

  postRequest(reqUrl: string, params?: any): Observable<any> {
    var endpoint = this.endpoint + '/' + reqUrl
    return this.http.post(endpoint, params)
      .pipe(
        catchError(error => {
          let errorMsg: string;
          if (error.error instanceof ErrorEvent) {
            this.errorMsg = `Error: ${error.error.message}`;
          } else {
            this.errorMsg = this.getServerErrorMessage(error);
          }

          return throwError(errorMsg);
        })
      );
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 404: {
        return `Not Found: ${error.message}`;
      }
      case 403: {
        return `Access Denied: ${error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
      }
      default: {
        return `Unknown Server Error: ${error.message}`;
      }

    }
  }


}
