import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../../../servicios/cliente.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  get marcasDisponibles(){
    return this.clienteService.marcasDisponibles;
  }

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

}
