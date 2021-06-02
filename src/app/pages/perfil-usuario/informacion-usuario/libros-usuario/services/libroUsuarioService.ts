import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment, environmentLibroteca } from 'src/environments/environment';
import { LibroUsuario, LibroUsuarioPost, ProgresoLibros } from '../models/librosUsuario';
import { Libro } from '../models/libro';
import { FechaLectura } from '../models/FechaLectura';
import { Puntuacion } from '../models/Puntuacion';
import { ComentarioLibroId } from 'src/app/pages/inicio/estadisticasUsuarios/models/ComentarioLibro';

export interface Busqueda {
  code: number;
}

  
  @Injectable({
    providedIn: 'root'
  })

  export class libroUsuarioService {

    constructor(private http: HttpClient) { }
  
    getLibroUsuario(idUsuario : number): Observable<LibroUsuario[]> {
        return this.http.get<LibroUsuario[]>(`${environmentLibroteca.api_url}/api/LibroUsuario/GetLibroByUsuario/${idUsuario}`)
          .pipe(catchError(this.handleError));
      }

    getLibros(idUsuario : number): Observable<Libro[]> {
        return this.http.get<Libro[]>(`${environmentLibroteca.api_url}/api/LibroUsuario/GetListaLibros/${idUsuario}`)
          .pipe(catchError(this.handleError));
      }

      getComentariosById(idLibro : number): Observable<ComentarioLibroId[]> {
        return this.http.get<ComentarioLibroId[]>(`${environmentLibroteca.api_url}/api/Libro/GetComentarioByIdLibro/${idLibro}`)
          .pipe(catchError(this.handleError));
      } 

     
      getLibroById(idLibro : number): Observable<Libro> {
        return this.http.get<Libro>(`${environmentLibroteca.api_url}/api/Libro/${idLibro}`)
          .pipe(catchError(this.handleError));
      } 


      post(libroUsuario: LibroUsuarioPost): Observable<Busqueda> {
        return this.http.post(`${environmentLibroteca.api_url}/api/LibroUsuario`, libroUsuario).pipe(
          map((response: Busqueda) => response)
        ).pipe(catchError(this.handleError));
      }
      postfechaLectura(fechaLectura: FechaLectura): Observable<Busqueda> {
        return this.http.post(`${environmentLibroteca.api_url}/api/FechaLectura`, fechaLectura).pipe(
          map((response: Busqueda) => response)
        ).pipe(catchError(this.handleError));
      }    

      updateProgreso(idProgreso : number,progresoLibros: ProgresoLibros): Observable<Busqueda> {
        return this.http.put(`${environmentLibroteca.api_url}/api/ProgresoLecturas/${idProgreso}`, progresoLibros).pipe(
          map((response: Busqueda) => response)
        ).pipe(catchError(this.handleError));
      }
      
      postPuntuacion(puntuacion: Puntuacion): Observable<Busqueda> {
        return this.http.post(`${environmentLibroteca.api_url}/api/PuntuacionLibro`, puntuacion).pipe(
          map((response: Busqueda) => response)
        ).pipe(catchError(this.handleError));
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