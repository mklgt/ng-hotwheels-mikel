import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { HotWheel } from './hotwheel';

@Injectable({
  providedIn: 'root'
})
export class HotWheelService {
  private hotwheelsUrl = 'api/hotwheels';

  constructor(private http: HttpClient) { }

  getHotWheels(): Observable<HotWheel[]> {
    return this.http.get<HotWheel[]>(this.hotwheelsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getMaxHotWheelId(): Observable<HotWheel> {
    return this.http.get<HotWheel[]>(this.hotwheelsUrl)
    .pipe(
      // Get max value from an array
      map(data => Math.max.apply(Math, data.map(function(o) { return o.id; }))   ),
      catchError(this.handleError)
    );
  }

  getHotWheelById(id: number): Observable<HotWheel> {
    const url = `${this.hotwheelsUrl}/${id}`;
    return this.http.get<HotWheel>(url)
      .pipe(
        tap(data => console.log('getHotWheel: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createHotWheel(hotWheel: HotWheel): Observable<HotWheel> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    hotWheel.id = null;
    return this.http.post<HotWheel>(this.hotwheelsUrl, hotWheel, { headers: headers })
      .pipe(
        tap(data => console.log('createHotWheel: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteHotWheel(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.hotwheelsUrl}/${id}`;
    return this.http.delete<HotWheel>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deleteHotWheel: ' + id)),
        catchError(this.handleError)
      );
  }

  updateHotWheel(hotWheel: HotWheel): Observable<HotWheel> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.hotwheelsUrl}/${hotWheel.id}`;
    return this.http.put<HotWheel>(url, hotWheel, { headers: headers })
      .pipe(
        tap(() => console.log('updateHotWheel: ' + hotWheel.id)),
        map(() => hotWheel),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
