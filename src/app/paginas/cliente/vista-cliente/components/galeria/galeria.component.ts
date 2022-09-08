import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../../../servicios/cliente.service';
import { Marca, Sabor } from '../../../../../interfaces/galeria.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent implements OnInit {
  public informacionDisponible: Sabor[] = [];

  public marcasCreadas: Marca[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.marcasCreadas().subscribe((respuesta) => {
      this.marcasCreadas = respuesta.marcasCreadas;
    });
  }
}
