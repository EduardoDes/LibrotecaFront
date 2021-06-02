import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { DashboardsModule } from 'src/app/_metronic/partials/content/dashboards/dashboards.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InlineSVGModule } from 'ng-inline-svg';
import { RankingLibroComponent } from './rankingLibros/rankingLibro.component';
import { UltimosComentariosComponent } from './ultimosComentarios/ultimosComentarios.component';
import { EstadisticasUsuariosComponent } from './estadisticasUsuarios/estadisticasUsuarios.component';
import { TopUsuariosComponent } from './topUsuarios/topUsuarios.component';
import { UltimosUsuariosComponent } from './ultimosUsuarios/ultimosUsuarios.component';
import { UltimosLibrosComponent } from './ultimosLibros/ultimosLibros.component';

@NgModule({
  declarations: [InicioComponent,RankingLibroComponent,UltimosComentariosComponent,EstadisticasUsuariosComponent,TopUsuariosComponent,UltimosUsuariosComponent,
  UltimosLibrosComponent],
  imports: [
    CommonModule,
    NgApexchartsModule,
    RouterModule.forChild([
      {
        path: '',
        component: InicioComponent
      },
    ]), 
    DashboardsModule,
    InlineSVGModule.forRoot()  
  ],
})
export class InicioModule {}