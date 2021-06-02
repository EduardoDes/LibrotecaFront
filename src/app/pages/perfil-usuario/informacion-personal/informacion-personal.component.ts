import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Usuario } from '../../inicio/estadisticasUsuarios/models/Usuario';
import { usuarioService } from '../services/UsuarioService';


@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html'
})
export class InformacionPersonalComponent implements OnInit {
 
  currentTab = 'Day';
  idUsuario : string ;
  resultado : Usuario = new Usuario();
  editarUsuarioForm: FormGroup;
  urlImagen : string;

  constructor(public usuarioService : usuarioService,public spinner : NgxSpinnerService,private fb: FormBuilder) {
  }



  ngOnInit(): void {

    this.construirEditarDatosUsuario();
    this.idUsuario = localStorage.getItem('user');
    this.getUsuario(this.idUsuario);
    
  }


  getUsuario(idUsuario){
    this.spinner.show();
    this.usuarioService.getUsuarioById(idUsuario).subscribe(res => {
       this.resultado = res;
       console.log(this.resultado);
       this.construirEditarDatosUsuario();
       this.spinner.hide();
    })
  }

  construirEditarDatosUsuario(): void {
    this.editarUsuarioForm = this.fb.group({
      imagen: ['16.jpg', Validators.required],
      nombreUsuario : [this.resultado.nombreUsuario, Validators.required],
      emailUsuario : [this.resultado.emailUsuario,[Validators.email,Validators.required]],
      presentacion : [this.resultado.presentacion,Validators.required]
    });
  }

  editarInformacion(){
    console.log(this.editarUsuarioForm.value);
    if (this.editarUsuarioForm.valid) {
      console.log('Buena');
    } else {
      console.log('Mala');
    }
  }

}
