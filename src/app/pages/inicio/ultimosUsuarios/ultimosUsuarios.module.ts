import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardsModule } from 'src/app/_metronic/partials/content/dashboards/dashboards.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InlineSVGModule } from 'ng-inline-svg';
import { UltimosUsuariosComponent } from './ultimosUsuarios.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [UltimosUsuariosComponent],
  imports: [
    CommonModule,
    NgApexchartsModule,
    AngularSvgIconModule,
    RouterModule.forChild([
      {
        path: '',
        component: UltimosUsuariosComponent
      },
    ]), 
    DashboardsModule,
    InlineSVGModule.forRoot()  
  ],
})
export class UltimosUsuariosModule {}