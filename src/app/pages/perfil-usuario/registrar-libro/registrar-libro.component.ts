import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-registrar-libro',
  templateUrl: './registrar-libro.component.html'
})
export class RegistrarLibroComponent implements OnInit {
 
  registrarLibroForm: FormGroup;

  constructor(public spinner : NgxSpinnerService,private fb: FormBuilder) {
  }



  ngOnInit(): void {

    this.construirRegistrarLibro();
  }



  construirRegistrarLibro(): void {
    this.registrarLibroForm = this.fb.group({
      nombreLibro: ["", Validators.required],
      autorLibro : ["", Validators.required],
      acnoLibro : [0,Validators.required],
      generoLibro : ["",Validators.required],
      resegna : ["",Validators.required],
      paginas : [0,Validators.required],
    });
  }

}
