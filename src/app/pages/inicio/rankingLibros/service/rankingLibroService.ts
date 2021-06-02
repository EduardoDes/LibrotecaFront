import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { LibroRankeado } from '../models/libroRankeado';
import { environment, environmentLibroteca } from 'src/environments/environment';

  
  @Injectable({
    providedIn: 'root'
  })

  export class rankingLibroService {

    constructor(private http: HttpClient) { }
  
    getLibrosRankeados(): Observable<LibroRankeado[]> {
        return this.http.get<LibroRankeado[]>(`${environmentLibroteca.api_url}/api/PuntuacionLibro/getLibrosRankeados`)
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