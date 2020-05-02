import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient,
    @Inject('API_URL') private apiUrl: string) { }

  login(username, password): Observable<any> {
    let API_URL = `${this.apiUrl}/users/login`;
    return this.http.post(API_URL, { username, password })
      .pipe(
        catchError(this.error)
      )
  }

  error(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error);
  }
}
