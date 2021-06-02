import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LayoutService } from 'src/app/_metronic/core';
import { TopUsuario } from './models/topUsuario';
import { topUsuarioService } from './services/topUsuariosService';

@Component({
  selector: 'app-topUsuarios',
  templateUrl: './topUsuarios.component.html'
})
export class TopUsuariosComponent implements OnInit {

  resultado : TopUsuario[] = [];


  constructor(private topUsuarioService : topUsuarioService, private spinner : NgxSpinnerService) {
   
   }

  ngOnInit(): void {

    this.getUsuarioTop();
   
  }

  
  getUsuarioTop(){
    this.spinner.show();
    this.topUsuarioService.getTopUsuarios().subscribe(res => {
      this.resultado = res;
      this.spinner.hide();
    })
  }
  

}
