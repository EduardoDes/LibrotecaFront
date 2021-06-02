import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmPasswordValidator } from 'src/app/modules/auth';
import { Usuario } from '../../inicio/estadisticasUsuarios/models/Usuario';
import { usuarioService } from '../services/UsuarioService';


@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html'
})
export class CambiarContrasenaComponent implements OnInit {
 
  currentTab = 'Day';
  idUsuario : string ;
  resultado : Usuario = new Usuario();
  cambioContrasenaForm: FormGroup;

  constructor(public usuarioService : usuarioService,public spinner : NgxSpinnerService,private fb: FormBuilder) {
  }



  ngOnInit(): void {

    this.idUsuario = localStorage.getItem('user');
    this.getUsuario(this.idUsuario);
    this.construirCambiarContrasena();
  }


  getUsuario(idUsuario){
    this.usuarioService.getUsuarioById(idUsuario).subscribe(res => {
       this.resultado = res;
       this.spinner.hide();
       
    })
  }

  // helpers for View
  isControlValid(controlName: string): boolean {
    const control = this.cambioContrasenaForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.cambioContrasenaForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.cambioContrasenaForm.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.cambioContrasenaForm.controls[controlName];
    return control.dirty || control.touched;
  }

  construirCambiarContrasena(): void {
    this.cambioContrasenaForm = this.fb.group({
      contrasenaActual :['',Validators.required],  
      nuevaContrasena : ['',Validators.required],
      cnuevaContrasena : ['',Validators.required]
    }, {
        validator: ConfirmPasswordValidator.MatchPassword});
  }

}
