import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ServerMessage } from '../shared/server-message';
import { Server } from '../shared/server';

@Injectable()
export class ServerService {
  constructor(private _http: HttpClient) {}

  getServers(): Observable<Server[]> {
    const url = 'http://localhost:5000/api/server';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'q=0.8;application/json;q=0.9',
    });

    return this._http.get<Server[]>(url, { headers }).pipe(
      map((res) => res),
      catchError(this.handleError)
    );
  }

  handleError(error: any) {
    const errMsg =
      error.message ||
      (error.status ? `${error.status} - ${error.statusText}` : 'Server error');

    console.log(errMsg);
    return throwError(errMsg);
  }

  handleServerMessage(msg: ServerMessage): Observable<any> {
    const url = `http://localhost:5000/api/server/${msg.id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'q=0.8;application/json;q=0.9',
    });

    return this._http.put(url, msg, { headers }).pipe(
      map((res) => res),
      catchError(this.handleError)
    );
  }
}
