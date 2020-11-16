import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {
  planetData: any;

  constructor(private httpService: HttpService) { }

  getPlanetsData(queryString) {
    return this.httpService.getRequest(queryString);
  }


  getGameDetails(queryString) {
    return new Promise((resolve, reject) => {
      this.httpService.getRequest(queryString)
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          });
    })
  }

  getGameToken(queryString) {
    return new Promise((resolve, reject) => {
      this.httpService.postRequest(queryString)
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          });
    })
  }

  getResult(queryString, body) {
    return new Promise((resolve, reject) => {
      this.httpService.postRequest(queryString, body)
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          });
    })

  }


}
