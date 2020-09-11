import { Utils } from './../utils/util.service';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

const endpoint = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {
  private header = new HttpHeaders();
  constructor(private http: HttpClient, private utils: Utils) {
    utils.setHeaders(this.header);
  }

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

  helloWorld(): Observable<any>{

    return this.http.get(endpoint, {headers: this.header} ).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
