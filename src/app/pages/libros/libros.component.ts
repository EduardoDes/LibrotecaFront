import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { libroUsuarioService } from '../perfil-usuario/informacion-usuario/libros-usuario/services/libroUsuarioService';
import { Libro } from '../perfil-usuario/informacion-usuario/libros-usuario/models/libro';
import { NgxSpinnerService } from 'ngx-spinner';
import { ComentarioLibroId } from '../inicio/estadisticasUsuarios/models/ComentarioLibro';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html'
})
export class LibrosComponent implements OnInit {
 
    idLibro : number;
    resultado : Libro;
    resultadoLibros : ComentarioLibroId[] = [];
  

  constructor(private activatedRoute: ActivatedRoute, private libroService : libroUsuarioService, private spinner : NgxSpinnerService) 
  {
    this.activatedRoute.params.subscribe(params => {
        this.idLibro = params.idLibro;
      });
  }



  ngOnInit(): void {

    this.spinner.show();
    this.libroService.getLibroById(this.idLibro).subscribe( res => {
       this.resultado = res;
       this.obtenerComentarios(this.idLibro);
       this.spinner.hide();
    })
    
  }


  obtenerComentarios(idLibro){
    this.spinner.show();
    this.libroService.getComentariosById(idLibro).subscribe( res => {
      this.resultadoLibros = res;
      console.log(res);
      this.spinner.hide();
    })
  }



}
