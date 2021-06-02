import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-informacion-usuario',
  templateUrl: './informacion-usuario.component.html'
})
export class InformacionUsuarioComponent implements OnInit {
 
  currentTab = 'Day';
  constructor() {
  }



  ngOnInit(): void {
  }


  setCurrentTab(tab: string) {
    this.currentTab = tab;
  }

}
