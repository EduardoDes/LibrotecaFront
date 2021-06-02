import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './_layout/layout.component';
import { InicioModule } from './inicio/inicio.module';
import { LibrosComponent } from './libros/libros.component';
import { LibrosModule } from './libros/libros.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: () =>
          import('./inicio/inicio.module').then((m) => m.InicioModule),
      },
      {
        path: 'perfilUsuario',
        loadChildren: () =>
          import('./perfil-usuario/perfil-usuario.module').then((m) => m.PerfilUsuarioModule),
      },
      {
        path: 'libros/:idLibro',
        loadChildren: () =>
          import('./libros/libros.module').then((m) => m.LibrosModule),
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'error/404',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
