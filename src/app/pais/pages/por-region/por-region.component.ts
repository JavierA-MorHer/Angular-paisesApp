import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles:[`
    button{
      margin-right: 3px;
    };
  `]
})
export class PorRegionComponent {

  regiones:string[]=['EU','EFTA','CARICOM',
                     'PA','AU','USAN','EEU',
                     'AL','ASEAN','CAIS','CEFTA',
                     'NAFTA','SAARC'];
  regionActiva:string = '';
  paises:Country[]=[];

  constructor( private paisesService:PaisService) { }

  getClaseCSS( region:string ):string{
    return (region === this.regionActiva) 
              ? 'btn btn-primary m-1' 
              : 'btn btn-outline-primary m-1';
  }

  activarRegion(region:string){
    if( region === this.regionActiva){return;}
    
    this.regionActiva = region;
    this.paises =[];
  }

  buscarRegion(region:string){

    this.paisesService.buscarRegion( region )
    .subscribe({
      next: (paises) => {
        this.paises = paises;
        return this.paises
      },
      error: (err) => {
        this.paises =[];
      }
    });

  }
}
