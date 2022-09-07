import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../../../servicios/cliente.service';
import { Marca, Sabor } from '../../../../../interfaces/galeria.interface';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent implements OnInit {
  public fueClickeado: boolean;

  // get informacionDisponible(){
  //   return this.clienteService.saboresDisponibles;
  // }

  public informacionDisponible: Sabor[] = [];

  public marcasCreadas: Marca[] = [];

  constructor(private clienteService: ClienteService) {
    this.fueClickeado = false;
  }

  ngOnInit(): void {
    this.clienteService.marcasCreadas().subscribe((respuesta) => {
      this.marcasCreadas = respuesta.marcasCreadas;
    });
  }

  clickearMarcar(marcaElegida: Marca) {
    console.log(marcaElegida);
    this.fueClickeado = true;
  }

  escucharRespuesta() {
    this.fueClickeado = false;
  }
}
