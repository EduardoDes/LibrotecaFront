import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardsModule } from 'src/app/_metronic/partials/content/dashboards/dashboards.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InlineSVGModule } from 'ng-inline-svg';
import { RankingLibroComponent } from './rankingLibro.component';
import { RatingModule} from 'ng-starrating';

@NgModule({
  declarations: [RankingLibroComponent],
  imports: [
    CommonModule,
    RatingModule,
    NgApexchartsModule,
    RouterModule.forChild([
      {
        path: '',
        component: RankingLibroComponent
      },
    ]), 
    DashboardsModule,
    InlineSVGModule.forRoot()  
  ],
})
export class RankingLibroModule {}