import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment, environmentLibroteca } from 'src/environments/environment';
import { UltimosUsuarios } from '../models/UltimosUsuarios';
import { Intereses } from '../models/Intereses';

  
  @Injectable({
    providedIn: 'root'
  })

  export class ultimosUsuariosService {

    constructor(private http: HttpClient) { }
  
    getUltimosUsuarios(): Observable<UltimosUsuarios[]> {
        return this.http.get<UltimosUsuarios[]>(`${environmentLibroteca.api_url}/api/Usuario/getUltimosRegistrados`)
          .pipe(catchError(this.handleError));
      }

    getIntereses(): Observable<Intereses[]> {
        return this.http.get<Intereses[]>(`${environmentLibroteca.api_url}/api/Intereses`)
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