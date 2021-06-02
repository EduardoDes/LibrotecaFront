import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardsModule } from 'src/app/_metronic/partials/content/dashboards/dashboards.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InlineSVGModule } from 'ng-inline-svg';
import { UltimosLibrosComponent } from './ultimosLibros.component';

@NgModule({
  declarations: [UltimosLibrosComponent],
  imports: [
    CommonModule,
    NgApexchartsModule,
    RouterModule.forChild([
      {
        path: '',
        component: UltimosLibrosComponent
      },
    ]), 
    DashboardsModule,
    InlineSVGModule.forRoot()  
  ],
})
export class UltimosLibrosModule {}