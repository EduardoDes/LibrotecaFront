import { Component, OnInit} from '@angular/core';
import { usuarioService } from '../../../perfil-usuario/services/UsuarioService';
import { Usuario } from '../../../perfil-usuario/models/Usuario';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {

  idUsuario : string;
  usuario : Usuario = new Usuario();

  constructor(private usuarioService : usuarioService,public spinner : NgxSpinnerService) {
 
  }

  ngOnInit(): void {

    
    this.spinner.show();
    this.idUsuario = localStorage.getItem('user');
    this.infoUsuario(this.idUsuario);
    // topbar extras
 
  }

 
   infoUsuario(idUsuario){
     this.usuarioService.getUsuarioById(idUsuario).subscribe(res => {
         this.usuario = res;
         this.spinner.hide();
     })
   }
}
