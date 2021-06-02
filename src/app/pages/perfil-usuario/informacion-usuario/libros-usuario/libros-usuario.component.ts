import { Component, OnInit } from '@angular/core';
import { libroUsuarioService } from './services/libroUsuarioService';
import { LibroUsuario, LibroUsuarioPost, ProgresoLibros } from './models/librosUsuario';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Libro } from './models/libro';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { FechaLectura } from './models/FechaLectura';
import { DatePipe } from '@angular/common';
import { Puntuacion } from './models/Puntuacion';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-libros-usuario',
  templateUrl: './libros-usuario.component.html'
})
export class LibrosUsuarioComponent implements OnInit {
 
  resultado : LibroUsuario[];
  resultadoLibro : Libro[];
  idUsuario : number;
  nuevoUsuarioLibroForm: FormGroup;
  nuevoProgresoLibrosForm: FormGroup;
  nuevaPuntuacionForm: FormGroup;
  libroUsuario : LibroUsuarioPost;  
  nombreLibro : string;
  imagenLibro : string;
  autorLibro : string;
  libroProgreso : LibroUsuario;
  libroPaginasRestantes : number = 1;
  progresoLibros : ProgresoLibros;
  puntuacion : Puntuacion;
  idProgreso : number;
  idLibro : number;
  paginasLeidas : number;
  fechaLectura : FechaLectura = new FechaLectura();
  date = new Date();
  

  constructor(public libroUsuarioService : libroUsuarioService ,private modalService: NgbModal , private spinner: NgxSpinnerService,private fb: FormBuilder,private datePipe : DatePipe) {
  }



  ngOnInit(): void {
      
      this.idUsuario = Number(localStorage.getItem('user'));
      this.getLibrosUsuario(this.idUsuario);
      this.getLibrosSelect(this.idUsuario);
      this.construirNuevoLibroUsuario();
      this.construirNuevoProgresoLibros();
      this.construirNuevaPuntuacion();
  }


  getLibrosUsuario(idUsuario){
   
    this.spinner.show();
      this.libroUsuarioService.getLibroUsuario(idUsuario).subscribe(res => {
         this.resultado = res ;
         console.log(res);
         this.spinner.hide();
      })

  }

  getLibrosSelect(IdUsuario){
    this.libroUsuarioService.getLibros(IdUsuario).subscribe(res => {
      this.resultadoLibro = res;
    })
  }

  construirNuevoLibroUsuario(): void {
    this.nuevoUsuarioLibroForm = this.fb.group({
      idLibro: ["1", Validators.required],
      idUsuario : [0, Validators.required]
    });
  }

  construirNuevoProgresoLibros(): void {
    this.nuevoProgresoLibrosForm = this.fb.group({
      paginasAvance : [0, Validators.required]
    });
  }

  construirNuevaPuntuacion(): void {
    this.nuevaPuntuacionForm = this.fb.group({
      puntuacion : [1, Validators.required],
      comentarioLibro : ['', Validators.required]
    });
  }

  guardarLibroUsuario(){
     const p = Object.assign({}, this.libroUsuario, this.nuevoUsuarioLibroForm.value);
     p.idUsuario = this.idUsuario;
     p.idLibro = Number(p.idLibro);
     if (p.idLibro == 1) {
      Swal.fire('Oops...', 'Debes elegir un libro!', 'error')
     } else {

      this.libroUsuarioService.post(p).subscribe( res => {
        this.getLibrosUsuario(this.idUsuario);
    },(error: HttpErrorResponse)=>{
        console.log(error);
         }); 
     }
   
  }

  agregarProgreso(){

    const p = Object.assign({}, this.progresoLibros, this.nuevoProgresoLibrosForm.value);
    p.idProgreso = this.idProgreso;
    p.idUsuario = this.idUsuario;
    p.idLibro = this.idLibro;
    p.paginasAvance = this.paginasLeidas + this.nuevoProgresoLibrosForm.get('paginasAvance').value;  
    this.fechaLectura.idFechaLectura = 0;
    this.fechaLectura.idUsuario = this.idUsuario;
    this.fechaLectura.FechaDeLectura = this.date;
    this.fechaLectura.cantidadLeidas = this.nuevoProgresoLibrosForm.get('paginasAvance').value;
    console.log(this.fechaLectura.cantidadLeidas);
    if (this.fechaLectura.cantidadLeidas < 1 || isNaN(this.fechaLectura.cantidadLeidas) || this.fechaLectura.cantidadLeidas == null) {
      Swal.fire('Oops...', 'Debe ingresar un numero mayor a cero', 'error');
    } else {

      this.libroUsuarioService.updateProgreso(this.idProgreso,p).subscribe( res => {
        console.log(res);  
        this.getLibrosUsuario(this.idUsuario);
        this.libroUsuarioService.postfechaLectura(this.fechaLectura).subscribe(res => {
          console.log(res);
        })
    },(error: HttpErrorResponse)=>{
        console.log(error);
         });
      
    }


  }

  agregarPuntuacion(){

    const p = Object.assign({}, this.puntuacion, this.nuevaPuntuacionForm.value);
    p.idUsuario = this.idUsuario;
    p.idLibro = this.idLibro;
    console.log(p);
    if (p.puntuacion < 1 || p.puntuacion > 5 || isNaN(p.puntuacion) || p.puntuacion ==  null) {
      Swal.fire('Oops...', 'La puntuacion debe ser un numero mayor a 0 y menor a 5', 'error');
    } else {
      if (p.comentarioLibro == '' || p.comentarioLibro == null) {
        Swal.fire('Oops...', 'Ingrese un comentario del libro', 'error');
      } else {
        this.libroUsuarioService.postPuntuacion(p).subscribe( res => {
          console.log(res);
        },(error: HttpErrorResponse)=>{
          console.log(error);
           });
      }
    }

  
   
  }

  openLarge(content) {
    this.modalService.open(content, {
      size: 'lg',
    });
  }

}
