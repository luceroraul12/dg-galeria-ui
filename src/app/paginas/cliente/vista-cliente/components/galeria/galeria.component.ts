import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../../../servicios/cliente.service';
import { Sabor } from '../../../../../interfaces/sabor.interface';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  get informacionDisponible(){
    return this.clienteService.saboresDisponibles;
  }

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  clickearMarcar(SaborElegido: Sabor){
    console.log(SaborElegido);
    
  }

}
