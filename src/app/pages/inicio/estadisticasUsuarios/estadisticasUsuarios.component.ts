import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/_metronic/core';
import { estadisticasUsuariosService } from './services/estadisticaUsuarioService';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-estadisticasUsuarios',
  templateUrl: './estadisticasUsuarios.component.html'
})
export class EstadisticasUsuariosComponent implements OnInit {

  @Input() cssClass: '';
  @Input() chartColor = 'primary';
  chartOptions: any = {};
  fontFamily = '';
  colorsGrayGray500 = '';
  colorsGrayGray200 = '';
  colorsGrayGray300 = '';
  colorsThemeBaseDanger = '';
  usuariosTotales : number = 0;
  paginasLeidas : number = 0;
  totalLibros : number = 0;
  totalResegnas : number = 0;
  

  constructor(private estadisticaService : estadisticasUsuariosService, private spinner : NgxSpinnerService) {
   
   }

  ngOnInit(): void {
    this.chartOptions = this.getChartOptions();
    this.getEstadisticas();
  }


  getEstadisticas(){

    this.spinner.show();
    this.estadisticaService.getUsuarios().subscribe( res =>{
      this.usuariosTotales = res.length;
      this.estadisticaService.getTotalPaginas().subscribe( res => {
        for (let index = 0; index < res.length; index++) {
          this.paginasLeidas = res[index].totalPaginas + this.paginasLeidas;
        }
        this.estadisticaService.getLibros().subscribe( res => {
          this.totalLibros = res.length;
          this.estadisticaService.getComentarios().subscribe(res => {
            this.totalResegnas = res.length;
            this.spinner.hide();
          });
        });

      });
    });
    
   
  

  }

  getChartOptions() {
    return {
      series: [{
        name: 'N° Usuarios',
        data: [35, 65, 75, 55, 45, 60, 55]
      }, {
        name: 'Paginas Leidas',
        data: [400, 700, 800, 600, 500, 650, 600]
      }],
      chart: {
        type: 'bar',
        height: '200px',
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ['30%'],
          endingShape: 'rounded'
        },
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: this.colorsGrayGray500,
            fontSize: '12px',
            fontFamily: this.fontFamily
          }
        }
      },
      yaxis: {
        min: 0,
        max: 1000,
        labels: {
          style: {
            colors: this.colorsGrayGray500,
            fontSize: '12px',
            fontFamily: this.fontFamily
          }
        }
      },
      fill: {
        type: ['solid', 'solid'],
        opacity: [0.25, 1]
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: this.fontFamily
        },
        y: {
          formatter: (val) => {
            return  val;
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#ffffff', '#ffffff'],
      grid: {
        borderColor: this.colorsGrayGray200,
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        },
        padding: {
          left: 20,
          right: 20
        }
      }
    };
  }

  

}
