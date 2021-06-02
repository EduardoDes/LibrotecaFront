import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment, environmentLibroteca } from 'src/environments/environment';
import { TopUsuario } from '../models/topUsuario';


  
  @Injectable({
    providedIn: 'root'
  })

  export class topUsuarioService {

    constructor(private http: HttpClient) { }
  
    getTopUsuarios(): Observable<TopUsuario[]> {
        return this.http.get<TopUsuario[]>(`${environmentLibroteca.api_url}/api/Usuario/getTopUsuarios`)
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