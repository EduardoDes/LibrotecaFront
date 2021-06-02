import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Usuario } from 'src/app/pages/inicio/estadisticasUsuarios/models/Usuario';
import { usuarioService } from 'src/app/pages/perfil-usuario/services/UsuarioService';

@Component({
  selector: 'app-user-dropdown-inner',
  templateUrl: './user-dropdown-inner.component.html',
  styleUrls: ['./user-dropdown-inner.component.scss'],
})
export class UserDropdownInnerComponent implements OnInit {
  idUsuario : string;
  usuario : Usuario = new Usuario();

  constructor(private usuarioService : usuarioService,public spinner : NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show();
    this.idUsuario = localStorage.getItem('user');
    this.infoUsuario(this.idUsuario);
    
  }

  infoUsuario(idUsuario){
    this.usuarioService.getUsuarioById(idUsuario).subscribe(res => {
        this.usuario = res;
        this.spinner.hide();
    })
  }

  logout() {
  }
}
