import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LibroRankeado } from './models/libroRankeado';
import { rankingLibroService } from './service/rankingLibroService';

@Component({
  selector: 'app-rankingLibro',
  templateUrl: './rankingLibro.component.html'
})
export class RankingLibroComponent implements OnInit {

  resultado : LibroRankeado[] = [];
  
  constructor(private librosRankingService : rankingLibroService,private http : HttpClient,private spinner : NgxSpinnerService) {   }

  ngOnInit(): void {
    
    this.obtenerLibrosRankeados();
  
  }



  obtenerLibrosRankeados(){

    this.spinner.show();
    this.librosRankingService.getLibrosRankeados().subscribe( res => {
      this.resultado = res;
      this.spinner.hide();

   }) 

  }



  

}
