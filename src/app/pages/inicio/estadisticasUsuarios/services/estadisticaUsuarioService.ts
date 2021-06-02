import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment, environmentLibroteca } from 'src/environments/environment';
import { Usuario } from '../models/Usuario';
import { Libro } from '../models/Libro';
import { Estadistica } from '../models/Estadistica';
import { ComentarioLibro } from '../models/ComentarioLibro';


  
  @Injectable({
    providedIn: 'root'
  })

  export class estadisticasUsuariosService {

    constructor(private http: HttpClient) { }
  
    getUsuarios(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${environmentLibroteca.api_url}/api/Usuario`)
          .pipe(catchError(this.handleError));
      }

    getLibros(): Observable<Libro[]> {
        return this.http.get<Libro[]>(`${environmentLibroteca.api_url}/api/Libro`)
          .pipe(catchError(this.handleError));
      }

    getTotalPaginas(): Observable<Estadistica[]> {
        return this.http.get<Estadistica[]>(`${environmentLibroteca.api_url}/api/Usuario/getEstadisticasUsuarios`)
          .pipe(catchError(this.handleError));
      }
    
    getComentarios(): Observable<ComentarioLibro[]> {
        return this.http.get<ComentarioLibro[]>(`${environmentLibroteca.api_url}/api/PuntuacionLibro`)
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