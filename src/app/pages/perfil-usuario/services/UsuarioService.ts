import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment, environmentLibroteca } from 'src/environments/environment';
import { Usuario } from '../models/Usuario';


  
  @Injectable({
    providedIn: 'root'
  })

  export class usuarioService {

    constructor(private http: HttpClient) { }
  
    getUsuarioById(idUsuario : number): Observable<Usuario> {
        return this.http.get<Usuario>(`${environmentLibroteca.api_url}/api/Usuario/${idUsuario}`)
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