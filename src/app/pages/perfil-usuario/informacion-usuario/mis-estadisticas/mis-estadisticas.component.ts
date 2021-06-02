import { Component, OnInit } from '@angular/core';
import { libroUsuarioService } from '../libros-usuario/services/libroUsuarioService';
import { Libro } from '../libros-usuario/models/libro';

@Component({
  selector: 'app-mis-estadisticas',
  templateUrl: './mis-estadisticas.component.html'
})
export class  MisEstadisticasComponent implements OnInit {

  idUsuario : number;
  resultado : Libro[];

  constructor(public libroUsuarioService : libroUsuarioService) {
  }



  ngOnInit(): void {
      
    this.idUsuario = Number(localStorage.getItem('user'));
    this.getLibrosSugeridos(this.idUsuario);
    
  }



  getLibrosSugeridos(IdUsuario){
    this.libroUsuarioService.getLibros(IdUsuario).subscribe(res => {
      this.resultado = res;
    })
  }


}
