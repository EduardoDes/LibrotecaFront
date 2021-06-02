import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardsModule } from 'src/app/_metronic/partials/content/dashboards/dashboards.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InlineSVGModule } from 'ng-inline-svg';
import { PerfilUsuarioComponent } from './perfil-usuario.component';
import { InformacionUsuarioComponent } from './informacion-usuario/informacion-usuario.component';
import { PerfilUsuarioRoutingModule } from './perfil-usuario-routing.module';
import { LibrosUsuarioComponent } from './informacion-usuario/libros-usuario/libros-usuario.component';
import { ModalModule } from 'ng2-modal-module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MisEstadisticasComponent } from './informacion-usuario/mis-estadisticas/mis-estadisticas.component';
import { InformacionPersonalComponent } from './informacion-personal/informacion-personal.component';
import { RegistrarLibroComponent } from './registrar-libro/registrar-libro.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';

@NgModule({
  declarations: [PerfilUsuarioComponent,InformacionUsuarioComponent,LibrosUsuarioComponent,MisEstadisticasComponent,InformacionPersonalComponent,RegistrarLibroComponent,CambiarContrasenaComponent],
  imports: [
    CommonModule,
    PerfilUsuarioRoutingModule,
    NgApexchartsModule,
    ModalModule,
    NgxSpinnerModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: PerfilUsuarioComponent
      },
    ]), 
    DashboardsModule,
    InlineSVGModule.forRoot()  
  ],
})
export class PerfilUsuarioModule {}