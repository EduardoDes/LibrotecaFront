import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from './models/Usuario';
import { usuarioService } from './services/UsuarioService';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html'
})
export class PerfilUsuarioComponent implements OnInit {

  idUsuario :string ;
  resultado : Usuario = new Usuario();
  constructor(public usuarioService : usuarioService, public spinner : NgxSpinnerService) {

  }



  ngOnInit(): void {

     this.spinner.show();
     this.idUsuario = localStorage.getItem('user');
     this.getUsuario(this.idUsuario);
  }


  getUsuario(idUsuario){
    this.usuarioService.getUsuarioById(idUsuario).subscribe(res => {
       this.resultado = res;
       this.spinner.hide();
     
       
    })
  }

}
