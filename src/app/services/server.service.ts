import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ServerMessage } from '../shared/server-message';
import { Server } from '../shared/server';

@Injectable({ providedIn: 'root' })
export class ServerService {
  private apiUrl = 'http://localhost:7015/api/';

  constructor(private _http: HttpClient) {}

  getServers(): Observable<Server[]> {
    return this._http
      .get<Server[]>(`${this.apiUrl}server`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    const errMsg =
      error.message ||
      (error.status ? `${error.status} - ${error.statusText}` : 'Server error');

    console.log(errMsg);
    return throwError(errMsg);
  }

  handleServerMessage(msg: ServerMessage): Observable<any> {
    const url = `${this.apiUrl}server/${msg.id}`;
    return this._http.put(url, msg).pipe(catchError(this.handleError));
  }
}
