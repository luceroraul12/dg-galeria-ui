import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../../../servicios/cliente.service';
import { Sabor } from '../../../../../interfaces/sabor.interface';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  public fueClickeado: boolean;

  get informacionDisponible(){
    return this.clienteService.saboresDisponibles;
  }

  constructor(private clienteService: ClienteService) { 
    this.fueClickeado = false;
  }

  ngOnInit(): void {
  }

  clickearMarcar(SaborElegido: Sabor){
    console.log(SaborElegido);
    this.fueClickeado = true;
  }

  escucharRespuesta(){
    this.fueClickeado = false;
  }

}
