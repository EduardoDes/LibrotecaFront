import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilUsuarioComponent } from './perfil-usuario.component';
import { InformacionUsuarioComponent } from './informacion-usuario/informacion-usuario.component';
import { InformacionPersonalComponent } from './informacion-personal/informacion-personal.component';
import { RegistrarLibroComponent } from './registrar-libro/registrar-libro.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';


const routes: Routes = [
  {
    path: '',
    component: PerfilUsuarioComponent,
    children: [
      {
        path: 'informacion-usuario',
        component: InformacionUsuarioComponent,  
      },
      {
        path: 'informacion-personal',
        component: InformacionPersonalComponent,  
      },
      {
        path: 'registrar-libro',
        component: RegistrarLibroComponent,  
      },
      {
        path: 'cambiar-contrasena',
        component: CambiarContrasenaComponent,  
      },
      { path: '', redirectTo: 'informacion-usuario', pathMatch: 'full' },
      { path: '**', redirectTo: 'informacion-usuario', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilUsuarioRoutingModule { }
