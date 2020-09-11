import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Utils } from 'src/app/utils/util.service';
import { Observable, throwError } from 'rxjs';
import { ApiUtil } from 'src/app/utils/api.data';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private header = new HttpHeaders();
  constructor(private http: HttpClient, utils: Utils) {
    utils.setHeaders(this.header);
    this.header.set('Accept', 'application/vnd.github.v3+json');
  }

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

  getRepo(owner: string, repo: string): Observable<any>{

    return this.http.get(ApiUtil.ENDPOINT_URL + '/repos/' + owner + '/' + repo, {headers: this.header} ).pipe(
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
