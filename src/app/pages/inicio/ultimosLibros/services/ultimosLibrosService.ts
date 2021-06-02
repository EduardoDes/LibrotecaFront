import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment, environmentLibroteca } from 'src/environments/environment';
import { UltimosLibros } from '../models/UltimosLibros';

  
  @Injectable({
    providedIn: 'root'
  })

  export class ultimosLibroService {

    constructor(private http: HttpClient) { }
  
    getLibrosRankeados(): Observable<UltimosLibros[]> {
        return this.http.get<UltimosLibros[]>(`${environmentLibroteca.api_url}/api/Libro/getUltimosAgregados`)
          .pipe(catchError(this.handleError));
      }

    handleError(error) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
    }
  }