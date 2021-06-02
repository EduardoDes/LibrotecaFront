import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ultimosComentarioService } from './service/ultimosComentariosService';
import { UltimosComentarios } from './models/UltimosComentarios';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ultimosComentarios',
  templateUrl: './ultimosComentarios.component.html'
})
export class UltimosComentariosComponent implements OnInit {

  resultado : UltimosComentarios[] = [];

  constructor(private ultimoComentarioService : ultimosComentarioService,private http : HttpClient,private spinner : NgxSpinnerService) {   }


  ngOnInit(): void {

    this.obtenerUltimosComentarios();
    
  }



  obtenerUltimosComentarios(){

    this.spinner.show();
    this.ultimoComentarioService.getLibrosRankeados().subscribe(res => {
       this.resultado = res;
       this.spinner.hide();

    })
  }


 

}
