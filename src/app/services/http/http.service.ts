import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpService {
  constructor(
    private http: HttpClient
  ) { }

  base(action: string, args: any[]): Observable<any> {
    return this.http[action](args[0], args[1], args[2]).map((res: any): Observable<any> => {
      return res;
    })
    .catch((err: HttpErrorResponse) => throwError(err.error));
  }

  get(...args: any[]): Observable<any> {
    return this.base('get', args);
  }

  post(...args: any[]): Observable<any> {
    return this.base('post', args);
  }

  put(...args: any[]): Observable<any> {
    return this.base('put', args);
  }

  delete(...args: any[]): Observable<any> {
    return this.base('delete', args);
  }
}
