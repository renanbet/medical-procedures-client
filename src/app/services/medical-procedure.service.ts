import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MedicalProcedure } from '../models/medical-procedure';

@Injectable({
  providedIn: 'root'
})
export class MedicalProcedureService {  
  public apiUrl: string = 'http://localhost:3001/procedures';

  constructor(private http: HttpClient) {}

  getHeaders() {
    let user = JSON.parse(localStorage.getItem('user'))
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization':  user.token
      })
    }
  }
  getProcedures(): Observable<MedicalProcedure[]> {
    return this.http.get<MedicalProcedure[]>(`${this.apiUrl}`, this.getHeaders())
      .pipe(
        catchError(this.error))
  }

  insert(data): Observable<any> {
    let API_URL = `${this.apiUrl}`;
    return this.http.post<MedicalProcedure>(API_URL, data, this.getHeaders())
      .pipe(
        catchError(this.error)
      )
  }

  update(id, data): Observable<any> {
    let API_URL = `${this.apiUrl}/${id}`;
    return this.http.put<MedicalProcedure>(API_URL, data, this.getHeaders()).pipe(
      catchError(this.error)
    )
  }

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}