import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/_metronic/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {




  ngOnInit(): void {

    localStorage.setItem('user','3');
  }



}
