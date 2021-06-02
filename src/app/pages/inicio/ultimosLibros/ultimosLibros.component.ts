import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UltimosLibros } from './models/UltimosLibros';
import { ultimosLibroService } from './services/ultimosLibrosService';

@Component({
  selector: 'app-ultimosLibros',
  templateUrl: './ultimosLibros.component.html'
})
export class UltimosLibrosComponent implements OnInit {

  resultados : UltimosLibros[] = [];

  constructor(private ultimosLibroService : ultimosLibroService,private http : HttpClient,private spinner : NgxSpinnerService) {   }

  ngOnInit(): void {

    this.obtenerUltimosLibrosAgregados();
  }


  obtenerUltimosLibrosAgregados(){
    this.spinner.show();
    this.ultimosLibroService.getLibrosRankeados().subscribe( res =>{
      this.resultados = res;
      this.spinner.hide();
      
    })
  }

  

}
