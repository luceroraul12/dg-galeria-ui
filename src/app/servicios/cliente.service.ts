import { Injectable } from '@angular/core';
import { Marca } from '../interfaces/marca.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private _marcasDePrueba: Marca[] = [
    {
      nombre: "Talca",
      enlaceImagen: "https://scontent.fluq3-1.fna.fbcdn.net/v/t1.6435-9/57451118_1960636304062775_8817114632264089600_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFX3b88mrZROEanr65g08Tb5eB9NMDt9mbl4H00wO32Zt6slqElyC3fdGGiTB6Vfkx8TM3p5wKNWGN1O2r1ryMF&_nc_ohc=3x_-FCdPfd4AX-K2g46&tn=iDZ978rNQQka_R1T&_nc_ht=scontent.fluq3-1.fna&oh=00_AT_R5-H0bz0B3gVVmjcw2LzyqTJzw9gL4GrFF7A4gV7vMg&oe=633B0A75"
    },
    {
      nombre: "Toro",
      enlaceImagen: "https://scontent.fluq3-1.fna.fbcdn.net/v/t39.30808-6/292291000_5352311628149529_6536240906962974119_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHlv3H2Uz5WLMdRuL0_-y2v7nL-cgQ2klzucv5yBDaSXLHI5Ma4t4lPClLJaWrlVYl_ldOxiM9fWmM0FVcVn4AC&_nc_ohc=mOmsB3DUgMAAX8tQyYS&_nc_ht=scontent.fluq3-1.fna&oh=00_AT8JBjB-ky7_fJss8_oGdD-_AGXi0ZxD9kmTBNvzok5QTw&oe=631A47E6"
    },
    {
      nombre: "Heineken",
      enlaceImagen: "https://scontent.fluq3-1.fna.fbcdn.net/v/t1.6435-9/37568671_1859067904113633_1881463312240082944_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHhpIpkUM-tMTXjisSGIIXQOvgd6CdTH5A6-B3oJ1MfkHCVG4agwpTrUxK3X6bLIUrFlY2QpKSrgXC1dPAPbaLJ&_nc_ohc=hUDK8rBPmh4AX_xTVeH&_nc_ht=scontent.fluq3-1.fna&oh=00_AT9SjbSQBMaGusXs8Z4n1fDi3O8LurPy8KQA-uKaH_YdEA&oe=633B0881"
    }
  ]

  get marcasDisponibles(){
    return [...this._marcasDePrueba]
  }


  constructor() { }

  
}
