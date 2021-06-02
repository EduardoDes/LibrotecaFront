import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardsModule } from 'src/app/_metronic/partials/content/dashboards/dashboards.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InlineSVGModule } from 'ng-inline-svg';
import { TopUsuariosComponent } from './topUsuarios.component';

@NgModule({
  declarations: [TopUsuariosComponent],
  imports: [
    CommonModule,
    NgApexchartsModule,
    RouterModule.forChild([
      {
        path: '',
        component: TopUsuariosComponent
      },
    ]), 
    DashboardsModule,
    InlineSVGModule.forRoot()  
  ],
})
export class TopUsuariosModule {}