import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MedicalProcedure } from '../models/medical-procedure';

@Injectable({
  providedIn: 'root'
})
export class MedicalProcedureService {  
  constructor(private http: HttpClient,
    @Inject('API_URL') private apiUrl: string) { }

  getHeaders() {
    let user = JSON.parse(localStorage.getItem('user'))
    let token = user ? user.token : ''
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization':  token
      })
    }
  }
  getProcedures(): Observable<MedicalProcedure[]> {
    return this.http.get<MedicalProcedure[]>(`${this.apiUrl}/procedures`, this.getHeaders())
      .pipe(
        catchError(this.error))
  }

  insert(data): Observable<any> {
    let API_URL = `${this.apiUrl}/procedures`;
    return this.http.post<MedicalProcedure>(API_URL, data, this.getHeaders())
      .pipe(
        catchError(this.error)
      )
  }

  update(id, data): Observable<any> {
    let API_URL = `${this.apiUrl}/procedures/${id}`;
    return this.http.put<MedicalProcedure>(API_URL, data, this.getHeaders()).pipe(
      catchError(this.error)
    )
  }

  remove(id): Observable<any> {
    let API_URL = `${this.apiUrl}/procedures/${id}`;
    return this.http.delete<MedicalProcedure>(API_URL, this.getHeaders()).pipe(
      catchError(this.error)
    )
  }

  error(error: HttpErrorResponse) {
    localStorage.removeItem('user')
    if (error.status === 403) {
      window.location.href = '/'
    }
    return throwError(error);
  }
}
