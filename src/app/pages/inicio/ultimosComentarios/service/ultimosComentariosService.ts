import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment, environmentLibroteca } from 'src/environments/environment';
import { UltimosComentarios } from '../models/UltimosComentarios';

  
  @Injectable({
    providedIn: 'root'
  })

  export class ultimosComentarioService {

    constructor(private http: HttpClient) { }
  
    getLibrosRankeados(): Observable<UltimosComentarios[]> {
        return this.http.get<UltimosComentarios[]>(`${environmentLibroteca.api_url}/api/Libro/getUltimosComentarios`)
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