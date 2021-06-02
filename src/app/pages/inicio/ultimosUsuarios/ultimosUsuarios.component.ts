import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/_metronic/core';
import { ultimosUsuariosService } from './services/UltimosUsuariosService';
import { UltimosUsuarios } from './models/UltimosUsuarios';
import { Intereses } from './models/Intereses';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ultimosUsuarios',
  templateUrl: './ultimosUsuarios.component.html'
})
export class UltimosUsuariosComponent implements OnInit {

  resultado : UltimosUsuarios[];
  intereses : Intereses[];
  constructor(private interesesService : ultimosUsuariosService, private spinner : NgxSpinnerService) { }

  ngOnInit(): void {

    this.obtenerUltimosUsuarios();
  
  }


  obtenerUltimosUsuarios(){
 
    this.spinner.show();
  
    this.interesesService.getIntereses().subscribe(resInt => {
      this.intereses = resInt;
      this.interesesService.getUltimosUsuarios().subscribe(res => {
        this.resultado = res;
        
        this.resultado.forEach(element => {
          
         for (let index = 0; index < this.intereses.length; index++) {
           
           if(element.interes1 == this.intereses[index].idInteres.toString()){
            element.interes1 = this.intereses[index].descripcion;
           }
           if(element.interes2 == this.intereses[index].idInteres.toString()){
            element.interes2 = this.intereses[index].descripcion;
           }
           if(element.interes3 == this.intereses[index].idInteres.toString()){
            element.interes3 = this.intereses[index].descripcion;
           }
           
         }
        });

    })
    })
     this.spinner.hide();
  
  }

}
